const pages = [
  {
    label: "Cover",
    art: "public/art/Cover.jpg",
    alt: "Yimei Chen's hand-drawn cover for Triplet Adventure, showing three sisters and a world map.",
    kicker: "Series 1",
    title: "Triplet Adventure",
    copy: ["The Long Trip Around the World"],
    discovery: "Ready to travel? The sisters’ adventure will begin with a big surprise.",
    snippet: null,
    presentation: "gallery",
    audio: "public/audio/cover-intro.mp3"
  },
  {
    label: "Meet the characters",
    art: "public/art/Characters.jpg",
    alt: "Yimei Chen's hand-drawn character page introducing Zoey, Emily, Mia, their family, teachers, and Katherine.",
    kicker: "Meet the cast",
    title: "The Three Sisters",
    copy: ["Zoey is kind and smart. Emily, her big sister, is always smart—but she is...", "Mia, her small sister, is excited to be going on an adventure! Their family, teachers, and best friend Katherine are part of the story too."],
    discovery: "Try finding Zoey, Emily, and Mia in Yimei’s original character drawings.",
    snippet: null,
    presentation: "gallery",
    audio: "public/audio/characters.mp3"
  },
  {
    label: "Chapter 1 · The Summer",
    art: "public/art/Chapter1_1.jpg",
    alt: "Yimei Chen's handwritten Chapter 1, The Summer.",
    kicker: "Chapter 1",
    title: "The Summer",
    copy: ["“Finally, no more school and early mornings!” Mia sighed happily.", "“Summer break is so boring. I’d rather be in school!” Emily sighed sadly.", "“Sister, are you crazy? No more homework! No more tests!” Mia yelled in disbelief. “At least in school I have friends to talk to,” Emily mumbled quietly. “Summer break is the best! I can play video games all day!” Mia exclaimed.", "“School is way better. We get to do science experiments and read new books,” Emily argued passionately.", "“Enough, you two! Summer break and school are both fun. Can’t we just enjoy both?” Zoey interrupted calmly. Mia crossed her arms. “Hmph! You’re just boring!” “No, you’re the one who’s childish!” Emily retorted, also crossing her arms."],
    discovery: "",
    snippet: null,
    audio: "public/audio/chapter-1.mp3"
  },
  {
    label: "Chapter 2 · Getting Ready",
    art: "public/art/Chapter1_2.jpg",
    alt: "Yimei Chen's handwritten chapter about the sisters learning about their surprise vacation.",
    kicker: "Chapter 2",
    title: "Getting Ready for Our Adventure",
    copy: ["When we walked inside, we saw our parents packing suitcases in the living room. “Mom, Dad, what are you doing?” we asked, surprised.", "Mom turned around with a huge smile. “We’re going on a surprise vacation!” she announced excitedly.", "“Where are we going?” I asked.", "“We’re going on a three-country adventure! First, we’re going to France to see the Eiffel Tower. Then we’ll explore the Amazon forest,” Mom said, her eyes sparkling. “Finally, we’ll end our trip in Japan, where we can eat sushi and visit temples!” Dad finished with a flourish.", "“Wow, that sounds amazing!” we cheered. Mom called from the kitchen, “Now, girls, go pack your suitcases quickly. We’re leaving tomorrow morning!” By bedtime, everything was packed. They couldn’t wait for tomorrow."],
    discovery: "Pack with the sisters: what is one thing you would bring on a big trip?",
    snippet: "public/snippets/suitcases.jpg",
    audio: "public/audio/chapter-2.mp3"
  },
  {
    label: "First stop · Paris",
    art: "public/art/Chapter2.jpg",
    alt: "Yimei Chen's handwritten page about the family arriving in Paris.",
    kicker: "First stop",
    title: "Paris",
    copy: ["The next morning, we flew to Paris. As we stepped out of the airport, the smell of fresh croissants filled the air.", "“Welcome to the City of Love!” my dad smiled.", "“Wow, it’s so beautiful! I can’t wait to see the Eiffel Tower!” I said.", "“Me too! I want to try all the delicious pastries!” Emily said.", "“Hmph! All they have are fancy pancakes. What’s so great about that?” Mia said.", "“Don’t worry, Mia. Paris has a lot of yummy treats besides pancakes. Let’s go see our hotel first. It must be good!” said Mom."],
    discovery: "A croissant is a flaky French pastry. Can you spot the little map of Paris on the original page?",
    snippet: "public/snippets/paris-map.jpg",
    audio: "public/audio/paris.mp3"
  },
  {
    label: "Chapter 3 · Lost in Paris",
    art: "public/art/Chapter3.jpg",
    alt: "Yimei Chen's handwritten Chapter 3, Lost in Paris.",
    kicker: "Chapter 3",
    title: "Lost in Paris",
    copy: [
      "But getting to the hotel was not easy. We couldn’t find a taxi in busy Paris.",
      "“Wait here, girls. We’ll go find a car to rent,” Dad said.",
      "But Emily, Mia, and I couldn’t wait. We wandered off to explore the busy street.",
      "When our parents came back, we were gone! “Mia? Zoey? Emily!” they called worriedly."
    ],
    discovery: "",
    snippet: null,
    audio: "public/audio/chapter-3.mp3"
  },
  {
    label: "Chapter 4 · A Parisian Puzzle",
    art: "public/art/Chapter4.jpg",
    alt: "Yimei Chen's handwritten Chapter 4, A Parisian Puzzle.",
    kicker: "Chapter 4",
    title: "A Parisian Puzzle",
    copy: [
      "After exploring for a while, we realized we couldn’t find the way back. “Mom? Dad?” Mia whispered.",
      "“Don’t worry! If we can’t find Mom and Dad right away, this is our chance for a real adventure! You always wanted one, remember?” Emily said.",
      "“But what if we run into danger, like bad people or big animals?” Mia asked.",
      "“Don’t worry! We’re prepared. We all have our suitcases and bags with money cards, and we know how to stay safe,” Emily said.",
      "Zoey winked. “So, let’s go on our adventure!”"
    ],
    discovery: "",
    snippet: null,
    audio: "public/audio/chapter-4.mp3"
  },
  {
    label: "Chapter 5 · First Day of Our Adventure",
    art: "public/art/Chapter5.jpg",
    alt: "Yimei Chen's handwritten Chapter 5, First Day of Our Adventure.",
    kicker: "Chapter 5",
    title: "First Day of Our Adventure",
    copy: [
      "Wandering through Paris’s cobblestone streets, the triplets didn’t know that a mysterious encounter awaited them.",
      "As we walked, we heard someone selling world maps. “A world map would be perfect for our adventure!” I said.",
      "“Yes! Then we won’t get lost again,” Mia said, nodding with relief. We bought the map and spread it out on a bench.",
      "“Let’s go to Japan! I love sushi and cherry blossoms,” Emily said.",
      "“No, Brazil! I want to see the Amazon forest,” Mia argued.",
      "“Stop arguing! Japan and Brazil are too far from Paris. We can’t walk on water. Let’s go to Belgium—it’s the closest!” I said.",
      "“You’re right!” Emily and Mia said."
    ],
    discovery: "",
    snippet: null,
    audio: "public/audio/chapter-5.mp3"
  },
  {
    label: "Reading Game",
    art: "public/art/ReadingGame.jpg",
    alt: "Yimei Chen's original reading game asking readers to choose a confident character and draw the Eiffel Tower.",
    kicker: "Yimei’s Reading Game",
    title: "Your Paris Challenge",
    copy: ["Choose a sister, then create your own Eiffel Tower. There are no wrong answers—this page belongs to you!"],
    discovery: "",
    snippet: null,
    audio: "public/audio/reading-game.mp3",
    presentation: "game",
    originalLabel: "See Yimei’s original game page"
  }
];

const requestedPage = Number(new URLSearchParams(window.location.search).get("page"));
let current = Number.isInteger(requestedPage) && requestedPage > 0
  ? Math.min(requestedPage - 1, pages.length - 1)
  : 0;
const art = document.querySelector("#page-art");
const kicker = document.querySelector("#reading-kicker");
const title = document.querySelector("#reading-title");
const copy = document.querySelector("#reading-copy");
const discovery = document.querySelector("#little-discovery");
const snippet = document.querySelector("#snippet-image");
const snippetCard = document.querySelector("#snippet-card");
const readingView = document.querySelector("#reading-view");
const originalPage = document.querySelector(".original-page");
const detailDialog = document.querySelector("#detail-dialog");
const dialogImage = document.querySelector("#dialog-image");
const player = document.querySelector("#narration-player");
const soundButton = document.querySelector(".sound-button");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const readingGame = document.querySelector("#reading-game");
const originalSummary = originalPage.querySelector("summary");
const canvas = document.querySelector("#drawing-canvas");
const canvasContext = canvas.getContext("2d", { willReadFrequently: true });
const choiceFeedback = document.querySelector("#choice-feedback");
const finishGame = document.querySelector("#finish-game");
const gameResult = document.querySelector("#game-result");

let selectedCharacter = "";
let hasDrawing = false;
let isDrawing = false;
let pencilColor = "#38283d";
const drawingHistory = [];

function render(autoPlay = true) {
  const page = pages[current];
  art.src = page.art;
  art.alt = page.alt;
  kicker.textContent = page.kicker;
  title.textContent = page.title;
  copy.replaceChildren(...page.copy.map(text => { const paragraph = document.createElement("p"); paragraph.textContent = text; return paragraph; }));
  discovery.textContent = page.discovery ? `Little discovery: ${page.discovery}` : "";
  discovery.hidden = true;
  snippetCard.hidden = !page.snippet;
  snippetCard.style.display = page.snippet ? "block" : "none";
  if (page.snippet) {
    snippet.src = page.snippet;
    snippet.alt = `A cropped detail from Yimei Chen's original ${page.label} drawing.`;
  }
  const isGallery = page.presentation === "gallery";
  readingView.classList.toggle("art-only", isGallery);
  readingView.classList.toggle("game-page", page.presentation === "game");
  readingGame.hidden = page.presentation !== "game";
  originalPage.open = isGallery;
  originalSummary.textContent = page.originalLabel || "See Yimei’s original page";
  player.pause();
  player.removeAttribute("src");
  player.load();
  soundButton.disabled = !page.audio;
  soundButton.textContent = page.audio ? "▶ Play narration" : "No narration on this art page";
  document.querySelector("#progress-fill").style.width = `${((current + 1) / pages.length) * 100}%`;
  previous.disabled = current === 0;
  next.textContent = current === pages.length - 1 ? "Read again ↻" : current === 0 ? "Begin →" : "Next →";
  if (autoPlay && page.audio) void playNarration();
}
previous.addEventListener("click", () => { current = Math.max(0, current - 1); render(); });
next.addEventListener("click", () => { current = current === pages.length - 1 ? 0 : current + 1; render(); });
snippetCard.addEventListener("click", () => {
  const page = pages[current];
  dialogImage.src = page.snippet;
  dialogImage.alt = `Enlarged cropped detail from Yimei Chen's original ${page.label} drawing.`;
  detailDialog.showModal();
  document.querySelector("#dialog-close").focus();
});
document.querySelector("#dialog-close").addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("click", event => { if (event.target === detailDialog) detailDialog.close(); });

function resetCanvas() {
  canvasContext.save();
  canvasContext.fillStyle = "#fffdf8";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.restore();
}

function canvasPoint(event) {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - bounds.left) * (canvas.width / bounds.width),
    y: (event.clientY - bounds.top) * (canvas.height / bounds.height)
  };
}

function updateGameButton() {
  finishGame.disabled = !(selectedCharacter && hasDrawing);
}

document.querySelectorAll("[data-character]").forEach(button => {
  button.addEventListener("click", () => {
    selectedCharacter = button.dataset.character;
    document.querySelectorAll("[data-character]").forEach(option => option.classList.toggle("selected", option === button));
    choiceFeedback.textContent = `${selectedCharacter} is a wonderful choice. Every sister can be smart and confident in her own way!`;
    updateGameButton();
  });
});

document.querySelectorAll("[data-color]").forEach(button => {
  button.style.setProperty("--swatch", button.dataset.color);
  button.addEventListener("click", () => {
    pencilColor = button.dataset.color;
    document.querySelectorAll("[data-color]").forEach(swatch => swatch.classList.toggle("selected", swatch === button));
  });
});

canvas.addEventListener("pointerdown", event => {
  event.preventDefault();
  isDrawing = true;
  canvas.setPointerCapture(event.pointerId);
  drawingHistory.push(canvasContext.getImageData(0, 0, canvas.width, canvas.height));
  if (drawingHistory.length > 15) drawingHistory.shift();
  const point = canvasPoint(event);
  canvasContext.beginPath();
  canvasContext.moveTo(point.x, point.y);
});

canvas.addEventListener("pointermove", event => {
  if (!isDrawing) return;
  const point = canvasPoint(event);
  canvasContext.lineTo(point.x, point.y);
  canvasContext.strokeStyle = pencilColor;
  canvasContext.lineWidth = 8;
  canvasContext.lineCap = "round";
  canvasContext.lineJoin = "round";
  canvasContext.stroke();
  hasDrawing = true;
  updateGameButton();
});

function stopDrawing() { isDrawing = false; }
canvas.addEventListener("pointerup", stopDrawing);
canvas.addEventListener("pointercancel", stopDrawing);

document.querySelector("#undo-drawing").addEventListener("click", () => {
  const previousDrawing = drawingHistory.pop();
  if (!previousDrawing) return;
  canvasContext.putImageData(previousDrawing, 0, 0);
  hasDrawing = drawingHistory.length > 0;
  updateGameButton();
});

document.querySelector("#clear-drawing").addEventListener("click", () => {
  if (hasDrawing) drawingHistory.push(canvasContext.getImageData(0, 0, canvas.width, canvas.height));
  resetCanvas();
  hasDrawing = false;
  updateGameButton();
});

document.querySelector("#save-drawing").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "my-eiffel-tower.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

finishGame.addEventListener("click", () => {
  gameResult.textContent = `Magnifique! You and ${selectedCharacter} completed Yimei’s Paris reading game!`;
  finishGame.textContent = "Adventure completed! ★";
  finishGame.classList.add("completed");
  for (let index = 0; index < 18; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.textContent = ["★", "♥", "●"][index % 3];
    confetti.style.setProperty("--x", `${Math.random() * 100}%`);
    confetti.style.setProperty("--delay", `${Math.random() * .5}s`);
    readingGame.append(confetti);
    setTimeout(() => confetti.remove(), 2200);
  }
});
async function playNarration() {
  const page = pages[current];
  if (!page.audio) return;
  if (!player.getAttribute("src")) player.src = page.audio;
  try { await player.play(); } catch { soundButton.textContent = "▶ Play narration"; }
}
soundButton.addEventListener("click", () => {
  if (player.paused) void playNarration();
  else player.pause();
});
player.addEventListener("play", () => { soundButton.textContent = "❚❚ Pause narration"; });
player.addEventListener("pause", () => { if (!player.ended && pages[current].audio) soundButton.textContent = "▶ Play narration"; });
player.addEventListener("ended", () => { soundButton.textContent = "↻ Play again"; });
player.addEventListener("error", () => { soundButton.textContent = "Narration unavailable"; });
resetCanvas();
render();
