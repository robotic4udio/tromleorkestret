# Tromleorkestret

Website for Tromleorkestret – the firebreathing music machine. Live at <https://tromleorkestret.com> (GitHub Pages, Jekyll).

## Run locally

```bash
bundle install
LANG=en_US.UTF-8 bundle exec jekyll serve --livereload
```

(`LANG` must be UTF-8, otherwise Jekyll chokes on the `ø` in `images/sølyst2025`.)

## Where things live

| What | Where |
| --- | --- |
| Front page (the showcase) | `index.html` |
| The Machine page | `_pages/the-machine.md` |
| Music, Shows, The Band, Contact | `_pages/` |
| Instruments (sub-pages of The Machine) | `_instruments/` → `/the-machine/<file-name>/` |
| Upcoming shows | `_data/upcoming.yml` |
| Menu, social links, site texts | `_data/settings.yml` |
| Styles / scripts | `assets/css/main.css`, `assets/js/main.js` |
| Web-sized photos | `images/web/` |

## Adding a show

Add it to `_data/upcoming.yml` – it appears on the front page and at the top of the Shows page.
After the show, move it to the "Past shows" list in `_pages/shows.md`.

## Adding an instrument

Create `_instruments/my-instrument.md`:

```yaml
---
title: The New Thing
tagline: "One sentence shown on the cards."
image: '/images/web/inst-my-instrument.jpg'
robotic: false   # true = listed under "The robots"
order: 10        # position in the lists and prev/next navigation
---
Markdown content…
```

It automatically shows up on The Machine page and in the front-page rail.

## Content helpers

- `{% include youtube.html id="VIDEO_ID" title="Optional title" %}` – fast click-to-play YouTube video.
- `<div class="wide">…</div>` – let something be wider than the text column.
- `![](/images/…jpg#wide)` – edge-to-edge photo; `#right` floats it to the right.
- `<div class="gallery-box"><div class="gallery"><img src="…">…</div><em>Caption</em></div>` – photo grid with lightbox.

Big photos: make a web copy before using them, e.g.
`sips -s format jpeg -s formatOptions 72 -Z 2400 original.jpg --out images/web/name.jpg`
(and `-Z 1000 … name-sm.jpg` for gallery thumbnails – the lightbox shows the big one).
