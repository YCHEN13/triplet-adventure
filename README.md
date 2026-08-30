# Triplet Adventure

A no-dependency, tablet-friendly interactive reader for **Triplet Adventure**, written and illustrated by Yimei Chen.

The current edition includes the cover, character guide, five story chapters, high-quality narration, and Yimei's interactive Paris reading game with a touch-friendly Eiffel Tower drawing canvas.

## Run locally

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Artwork promise

- The source photographs in the project root are never modified.
- `public/art/` contains smaller web copies with only a mild global brightness/contrast adjustment for readability.
- The reader uses cropped copies as separate tappable detail cards. The untouched full page appears after the typed story; no controls are placed over the image pixels.

## Narration

The generated high-quality narration files are in `public/audio/`. The reader includes one play/pause button for each narrated story page.

To regenerate them, provide an `ELEVENLABS_API_KEY` only in your terminal environment and run:

```sh
node scripts/generate-elevenlabs-audio.mjs
```

The generator checks the remaining ElevenLabs balance before starting and refuses a plan over 9,500 characters. Never place an API key in the browser code or leave it in the project root while the local server is running.
