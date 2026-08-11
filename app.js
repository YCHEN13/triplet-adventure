const pages = [
  {
    label: "Cover",
    art: "public/art/Cover.jpg",
    alt: "Yimei Chen's hand-drawn cover for Triplet Adventure, showing three sisters and a world map.",
    kicker: "Series 1",
    title: "Triplet Adventure",
    copy: ["The Long Trip Around the World"],
    discovery: "Ready to travel? The sisters’ adventure will begin with a big surprise.",
    snippet: "public/snippets/world-map.jpg",
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
    snippet: "public/snippets/sisters.jpg",
    presentation: "gallery",
    audio: null
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
  }
];

let current = 0;
const art = document.querySelector("#page-art");
const label = document.querySelector("#page-label");
const kicker = document.querySelector("#reading-kicker");
const title = document.querySelector("#reading-title");
const copy = document.querySelector("#reading-copy");
const discovery = document.querySelector("#little-discovery");
const snippet = document.querySelector("#snippet-image");
const snippetCard = document.querySelector("#snippet-card");
const readingView = document.querySelector("#reading-view");
const originalPage = document.querySelector(".original-page");
const readerHint = document.querySelector("#reader-hint");
const detailDialog = document.querySelector("#detail-dialog");
const dialogImage = document.querySelector("#dialog-image");
const player = document.querySelector("#narration-player");
const soundButton = document.querySelector(".sound-button");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

function render() {
  const page = pages[current];
  label.textContent = page.label;
  art.src = page.art;
  art.alt = page.alt;
  kicker.textContent = page.kicker;
  title.textContent = page.title;
  copy.replaceChildren(...page.copy.map(text => { const paragraph = document.createElement("p"); paragraph.textContent = text; return paragraph; }));
  discovery.textContent = page.discovery ? `Little discovery: ${page.discovery}` : "";
  discovery.hidden = true;
  snippetCard.hidden = !page.snippet;
  snippetCard.style.display = page.snippet ? "grid" : "none";
  if (page.snippet) {
    snippet.src = page.snippet;
    snippet.alt = `A cropped detail from Yimei Chen's original ${page.label} drawing.`;
  }
  const isGallery = page.presentation === "gallery";
  readingView.classList.toggle("art-only", isGallery);
  originalPage.open = isGallery;
  readerHint.textContent = isGallery
    ? "Yimei’s original artwork"
    : "Read, tap a drawing detail, then see the original page below.";
  player.pause();
  player.removeAttribute("src");
  player.load();
  soundButton.disabled = !page.audio;
  soundButton.textContent = page.audio ? "▶ Play narration" : "No narration on this art page";
  document.querySelector("#progress-fill").style.width = `${((current + 1) / pages.length) * 100}%`;
  previous.disabled = current === 0;
  next.textContent = current === pages.length - 1 ? "Read again ↻" : current === 0 ? "Begin →" : "Next →";
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
soundButton.addEventListener("click", async () => {
  const page = pages[current];
  if (!page.audio) return;
  if (!player.getAttribute("src")) player.src = page.audio;
  if (player.paused) {
    try { await player.play(); } catch { soundButton.textContent = "Audio is still loading"; }
  } else {
    player.pause();
  }
});
player.addEventListener("play", () => { soundButton.textContent = "❚❚ Pause narration"; });
player.addEventListener("pause", () => { if (!player.ended && pages[current].audio) soundButton.textContent = "▶ Play narration"; });
player.addEventListener("ended", () => { soundButton.textContent = "↻ Play again"; });
player.addEventListener("error", () => { soundButton.textContent = "Narration unavailable"; });
render();
