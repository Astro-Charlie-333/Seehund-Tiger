# Berlin — Licht, Schatten & Beton

Eine mehrseitige, editoriale Website über Berlins Geschichte: Film, Fotografie,
Kultur, Politik/DDR, Persönlichkeiten und queere/lesbische Geschichte.

## Dateien
- `index.html` — Startseite (Register)
- `film.html`, `fotografie.html`, `kultur.html`, `politik.html`,
  `persoenlichkeiten.html`, `queer.html` — die sechs Themenräume
- `style.css` — gemeinsames Design
- `app.js` — gemeinsame Interaktionen (Lightbox, Accordion, Einblendungen)

**Wichtig:** Alle Dateien müssen zusammen im selben Ordner liegen
(`style.css` und `app.js` neben den HTML-Dateien), sonst fehlen Design und Funktion.

## Auf GitHub veröffentlichen
1. Neues, öffentliches Repository anlegen.
2. Alle Dateien ins Hauptverzeichnis hochladen (nicht in einen Unterordner).
3. Settings → Pages → Source „Deploy from a branch" → Branch `main` → `/ (root)` → Save.
4. 2–3 Minuten warten; die Live-URL erscheint oben im Pages-Bereich.

## Echte Fotos einbauen (optional)
Die Seite nutzt gezeichnete Tafeln (SVG), damit nichts kaputtgeht und keine
Urheberrechte verletzt werden. Für echte historische Fotos: gemeinfreie Bilder
bei **Wikimedia Commons** suchen (Lizenz „Public domain" oder „CC"), herunterladen,
in den Ordner legen und mit `<img src="datei.jpg" alt="…">` einsetzen.

## Schriften
Fraunces, Space Grotesk, IBM Plex Mono (über Google Fonts geladen).
