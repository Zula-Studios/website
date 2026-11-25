#!/usr/bin/env python3
"""
Erzeugt Open-Graph-Vorschaubilder (1200×630) für jede Seite der Sitemap.

Nutzung (Dev-Server muss laufen: npm run dev):
    python3 scripts/og-images.py [http://localhost:4321]

Ergebnis:
    public/images/og/<pfad>.jpg      ein Bild pro Seite
    src/data/og-images.json          Zuordnung Pfad → Bild (liest SEO.astro)

Nach neuen Seiten/Titeln einfach erneut ausführen. Seiten ohne eigenes Bild
nutzen automatisch /images/og-default.jpg.
Benötigt: Pillow (pip install pillow). Schriften: macOS-Systemschriften.
"""
import html
import json
import re
import sys
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4321').rstrip('/')
OUT_DIR = ROOT / 'public/images/og'
MANIFEST = ROOT / 'src/data/og-images.json'
LOGO = ROOT / 'public/images/logo.png'

FONT_DIR = '/System/Library/Fonts/Supplemental'
TITLE_FONT = f'{FONT_DIR}/Arial Bold Italic.ttf'
LABEL_FONT = f'{FONT_DIR}/Arial Bold.ttf'

INK, GREEN, WHITE, GRID = (10, 10, 12), (0, 245, 115), (255, 255, 255), (18, 18, 22)
W, H = 1200, 630
TEXT_X, TEXT_W = 80, 700

SKIP = re.compile(r'^/(danke|404|kampagne/)')
SECTIONS = [
    ('/leistungen/', 'Leistung · Zula Studios Hamburg'),
    ('/referenzen/', 'Referenz · Zula Studios'),
    ('/blog/', 'Ratgeber · Zula Studios'),
    ('/karriere/', 'Karriere · Zula Studios'),
]


def fetch(path: str) -> str:
    with urllib.request.urlopen(BASE + path, timeout=30) as r:
        return r.read().decode('utf-8', 'replace')


def page_paths() -> list[str]:
    sitemap = (ROOT / 'dist/client/sitemap-0.xml')
    if not sitemap.exists():
        sys.exit('Sitemap fehlt — zuerst `npm run build` ausführen.')
    urls = re.findall(r'<loc>([^<]+)</loc>', sitemap.read_text())
    paths = [re.sub(r'^https?://[^/]+', '', u) or '/' for u in urls]
    return [p for p in paths if not SKIP.match(p)]


def page_title(markup: str) -> str:
    m = re.search(r'<meta property="og:title" content="([^"]*)"', markup)
    title = html.unescape(m.group(1)) if m else ''
    return re.sub(r'\s*\|\s*Zula Studios\s*$', '', title).strip()


def eyebrow_for(path: str) -> str:
    for prefix, label in SECTIONS:
        if path.startswith(prefix):
            return label
    return 'Shopify Agentur Hamburg'


def wrap(draw, text, font, width):
    words, lines, line = text.split(), [], ''
    for word in words:
        test = f'{line} {word}'.strip()
        if draw.textlength(test, font=font) <= width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def render(title: str, eyebrow: str, target: Path):
    img = Image.new('RGB', (W, H), INK)
    d = ImageDraw.Draw(img)
    for x in range(0, W, 48):
        d.line([(x, 0), (x, H)], fill=GRID)
    for y in range(0, H, 48):
        d.line([(0, y), (W, y)], fill=GRID)

    logo = Image.open(LOGO).convert('RGBA')
    lh = 170
    logo = logo.resize((int(logo.width * lh / logo.height), lh), Image.LANCZOS)
    img.paste(logo, (W - logo.width - 90, (H - lh) // 2 - 10), logo)

    # Titelgröße so wählen, dass er in max. 4 Zeilen passt
    for size in (72, 64, 56, 50, 44):
        font = ImageFont.truetype(TITLE_FONT, size)
        lines = wrap(d, title.upper(), font, TEXT_W)
        if len(lines) <= 4:
            break
    line_h = int(size * 1.08)
    label = ImageFont.truetype(LABEL_FONT, 24)
    block_h = 24 + 28 + len(lines) * line_h
    y = (H - block_h) // 2
    d.text((TEXT_X, y), eyebrow.upper(), font=label, fill=GREEN)
    y += 24 + 28
    for i, line in enumerate(lines):
        d.text((TEXT_X, y), line, font=font, fill=GREEN if i == len(lines) - 1 else WHITE)
        y += line_h
    d.text((TEXT_X, H - 70), 'zulastudios.com', font=label, fill=(140, 140, 150))
    d.rectangle([0, H - 8, W, H], fill=GREEN)

    target.parent.mkdir(parents=True, exist_ok=True)
    img.save(target, quality=86, optimize=True, progressive=True)


def main():
    manifest = {}
    for path in page_paths():
        title = page_title(fetch(path))
        if not title:
            print(f'übersprungen (kein Titel): {path}')
            continue
        name = 'home' if path == '/' else path.strip('/')
        rel = f'/images/og/{name}.jpg'
        render(title, eyebrow_for(path), ROOT / 'public' / rel.lstrip('/'))
        manifest[path] = rel
        print(f'{path:45} → {rel}')
    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n')
    print(f'\n{len(manifest)} Bilder erzeugt, Manifest: {MANIFEST.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
