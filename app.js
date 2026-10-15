const tools = [
  {name:"ChatGPT",maker:"OpenAI",category:"Writing",description:"Brainstorm, draft, learn, and work through everyday questions with an AI assistant.",url:"https://chatgpt.com/",pricing:"Free plan",mark:"C",tone:"linear-gradient(135deg,#168b73,#073c37)",tags:"assistant writing study ideas research"},
  {name:"Claude",maker:"Anthropic",category:"Writing",description:"An AI assistant for writing, analysis, planning, and working through complex ideas.",url:"https://claude.ai/",pricing:"Free plan",mark:"✳",tone:"linear-gradient(135deg,#d9a77e,#8e533b)",tags:"writing analysis assistant documents"},
  {name:"Google Gemini",maker:"Google",category:"Productivity",description:"Get help with questions, planning, learning, and creative tasks from Google's AI assistant.",url:"https://gemini.google.com/",pricing:"Free access",mark:"✦",tone:"linear-gradient(135deg,#72a5ff,#7c61e8)",tags:"assistant productivity study google"},
  {name:"Perplexity",maker:"Perplexity AI",category:"Research",description:"Explore questions with web-focused answers and source links to continue your research.",url:"https://www.perplexity.ai/",pricing:"Free plan",mark:"P",tone:"linear-gradient(135deg,#4bb7b0,#176c80)",tags:"research search sources facts"},
  {name:"Grammarly",maker:"Grammarly",category:"Writing",description:"Check grammar, clarity, and tone to polish emails, assignments, and other writing.",url:"https://www.grammarly.com/",pricing:"Free plan",mark:"G",tone:"linear-gradient(135deg,#52d6a1,#087f63)",tags:"writing grammar editing school"},
  {name:"QuillBot",maker:"QuillBot",category:"Writing",description:"Paraphrase and revise text, check grammar, and support your writing workflow.",url:"https://quillbot.com/",pricing:"Free plan",mark:"Q",tone:"linear-gradient(135deg,#6cd9a5,#287b70)",tags:"writing paraphrase grammar editing"},
  {name:"Canva Magic Studio",maker:"Canva",category:"Design",description:"Create presentations, social posts, and visual designs with AI-powered features.",url:"https://www.canva.com/magic-studio/",pricing:"Free plan",mark:"Ca",tone:"linear-gradient(135deg,#47c7dd,#7c64ee)",tags:"design presentation social media graphics"},
  {name:"Adobe Firefly",maker:"Adobe",category:"Images",description:"Generate and edit creative images with Adobe's family of generative AI tools.",url:"https://firefly.adobe.com/",pricing:"Free credits",mark:"F",tone:"linear-gradient(135deg,#ff7b62,#d9345d)",tags:"image art generate design"},
  {name:"Ideogram",maker:"Ideogram",category:"Images",description:"Create images and visual concepts, including designs that use stylised text.",url:"https://ideogram.ai/",pricing:"Free plan",mark:"I",tone:"linear-gradient(135deg,#ffb56b,#d66a48)",tags:"image text logo poster art"},
  {name:"Leonardo AI",maker:"Leonardo.Ai",category:"Images",description:"Explore AI image generation for illustrations, concepts, and creative assets.",url:"https://leonardo.ai/",pricing:"Free plan",mark:"L",tone:"linear-gradient(135deg,#c08cff,#6556d8)",tags:"image art illustration game assets"},
  {name:"Microsoft Designer",maker:"Microsoft",category:"Design",description:"Make graphics and designs with AI assistance for personal and social projects.",url:"https://designer.microsoft.com/",pricing:"Free access",mark:"M",tone:"linear-gradient(135deg,#7bbdff,#5a6ae6)",tags:"design graphics social media image"},
  {name:"CapCut",maker:"CapCut",category:"Video",description:"Edit videos and explore AI-assisted tools for short-form content and social media.",url:"https://www.capcut.com/",pricing:"Free tools",mark:"▶",tone:"linear-gradient(135deg,#e0e5f4,#777f9d)",tags:"video editing tiktok shorts social"},
  {name:"Runway",maker:"Runway",category:"Video",description:"Explore generative video tools for creative experiments and visual storytelling.",url:"https://runwayml.com/",pricing:"Free credits",mark:"R",tone:"linear-gradient(135deg,#f2a6b7,#8a6fe6)",tags:"video generate film animation"},
  {name:"Pika",maker:"Pika",category:"Video",description:"Turn creative prompts and ideas into AI-assisted video experiments.",url:"https://pika.art/",pricing:"Free access may vary",mark:"Pi",tone:"linear-gradient(135deg,#ffb2a0,#bd69db)",tags:"video animation create clips"},
  {name:"Descript",maker:"Descript",category:"Video",description:"Edit audio and video with a text-based workflow and AI-assisted production features.",url:"https://www.descript.com/",pricing:"Free plan",mark:"D",tone:"linear-gradient(135deg,#9ba9ff,#555fd0)",tags:"video podcast audio editing transcription"},
  {name:"GitHub Copilot",maker:"GitHub",category:"Coding",description:"Get AI assistance for understanding code, writing functions, and developer workflows.",url:"https://github.com/features/copilot",pricing:"Plan eligibility varies",mark:"⌘",tone:"linear-gradient(135deg,#7d8ba6,#39455f)",tags:"coding programming developer code"},
  {name:"Replit",maker:"Replit",category:"Coding",description:"Build and run projects in the browser, with AI features to help you get started.",url:"https://replit.com/",pricing:"Free options",mark:"R",tone:"linear-gradient(135deg,#ffb56b,#e57c3d)",tags:"coding programming website app browser"},
  {name:"Cursor",maker:"Cursor",category:"Coding",description:"An AI-powered code editor designed to help developers understand and edit code.",url:"https://cursor.com/",pricing:"Free tier",mark:"↗",tone:"linear-gradient(135deg,#d7e3ff,#7785a6)",tags:"coding programming editor developer"},
  {name:"Khan Academy Khanmigo",maker:"Khan Academy",category:"Study",description:"AI-supported learning experiences designed to guide students through learning.",url:"https://www.khanacademy.org/khan-labs",pricing:"Availability varies",mark:"K",tone:"linear-gradient(135deg,#79d8a1,#27805e)",tags:"study tutor learning school maths"},
  {name:"NotebookLM",maker:"Google",category:"Study",description:"Explore your own source materials with AI-assisted summaries and study workflows.",url:"https://notebooklm.google.com/",pricing:"Free access",mark:"N",tone:"linear-gradient(135deg,#8cbbff,#6e69e8)",tags:"study notes research sources summary"},
  {name:"Elicit",maker:"Elicit",category:"Research",description:"Support literature reviews and research workflows with AI-assisted paper discovery.",url:"https://elicit.com/",pricing:"Free plan",mark:"E",tone:"linear-gradient(135deg,#a7d6bd,#438d78)",tags:"research papers academic science"},
  {name:"Consensus",maker:"Consensus",category:"Research",description:"Search research literature and explore answers grounded in scientific papers.",url:"https://consensus.app/",pricing:"Free plan",mark:"Co",tone:"linear-gradient(135deg,#7ed9d2,#3584a4)",tags:"research science papers evidence"},
  {name:"Notion AI",maker:"Notion",category:"Productivity",description:"Organise projects, notes, and knowledge with AI features inside Notion.",url:"https://www.notion.so/product/ai",pricing:"AI access may require a paid plan",mark:"N",tone:"linear-gradient(135deg,#a8b0c6,#59627a)",tags:"productivity notes tasks planning"},
  {name:"Zapier",maker:"Zapier",category:"Productivity",description:"Connect apps and automate repeatable workflows, including AI-powered processes.",url:"https://zapier.com/",pricing:"Free plan",mark:"Z",tone:"linear-gradient(135deg,#ffbd69,#d66b38)",tags:"productivity automation workflow business"}
];

const grid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const savedCount = document.getElementById("savedCount");
const favoritesToggle = document.getElementById("favoritesToggle");
const sortSelect = document.getElementById("sortSelect");
let activeCategory = "All";
let showFavorites = false;
let query = "";
let saved = new Set();
try { saved = new Set(JSON.parse(localStorage.getItem("aivanta-saved-tools") || "[]")); } catch (_) {}

function saveFavorites() {
  try { localStorage.setItem("aivanta-saved-tools", JSON.stringify([...saved])); } catch (_) {}
  savedCount.textContent = saved.size;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function getVisibleTools() {
  let list = tools.filter(tool => {
    const text = `${tool.name} ${tool.maker} ${tool.category} ${tool.description} ${tool.tags}`.toLowerCase();
    return (!query || text.includes(query.toLowerCase())) &&
      (activeCategory === "All" || tool.category === activeCategory) &&
      (!showFavorites || saved.has(tool.name));
  });
  if (sortSelect.value === "name") list.sort((a,b) => a.name.localeCompare(b.name));
  return list;
}
function render() {
  saveFavorites();
  const list = getVisibleTools();
  grid.innerHTML = list.map(tool => `
    <article class="tool-card">
      <div class="card-top">
        <div class="tool-identity">
          <div class="tool-logo" style="background:${tool.tone}" aria-hidden="true">${escapeHtml(tool.mark)}</div>
          <div style="min-width:0"><div class="tool-name">${escapeHtml(tool.name)}</div><div class="tool-company">${escapeHtml(tool.maker)}</div></div>
        </div>
        <button class="save-tool ${saved.has(tool.name) ? "saved" : ""}" type="button" data-save="${escapeHtml(tool.name)}" aria-label="${saved.has(tool.name) ? "Remove" : "Save"} ${escapeHtml(tool.name)} ${saved.has(tool.name) ? "from" : "to"} favourites" aria-pressed="${saved.has(tool.name)}">${saved.has(tool.name) ? "♥" : "♡"}</button>
      </div>
      <p class="tool-desc">${escapeHtml(tool.description)}</p>
      <div class="card-meta"><span class="category-label">${escapeHtml(tool.category)}</span><span class="pricing-label">${escapeHtml(tool.pricing)}</span></div>
      <div class="card-bottom"><span style="font-size:10px;color:#687592">Official website</span><a class="visit-link" href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer">Visit tool <span>↗</span></a></div>
    </article>`).join("");
  emptyState.hidden = list.length > 0;
  grid.hidden = list.length === 0;
  resultsCount.textContent = showFavorites ? `${list.length} saved ${list.length === 1 ? "tool" : "tools"}` : `Showing ${list.length} of ${tools.length} tools`;
  favoritesToggle.setAttribute("aria-pressed", String(showFavorites));
  favoritesToggle.style.borderColor = showFavorites ? "rgba(159,132,255,.7)" : "";
}
document.getElementById("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
  render();
});
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-save]");
  if (!button) return;
  const name = button.dataset.save;
  saved.has(name) ? saved.delete(name) : saved.add(name);
  render();
});
searchInput.addEventListener("input", () => { query = searchInput.value.trim(); render(); });
sortSelect.addEventListener("change", render);
favoritesToggle.addEventListener("click", () => { showFavorites = !showFavorites; render(); document.getElementById("explore").scrollIntoView({behavior:"smooth"}); });
document.querySelectorAll(".quick-search").forEach(button => button.addEventListener("click", () => {
  searchInput.value = button.dataset.query; query = button.dataset.query; render();
  document.getElementById("explore").scrollIntoView({behavior:"smooth"});
}));
function resetFilters() {
  query = ""; searchInput.value = ""; activeCategory = "All"; showFavorites = false; sortSelect.value = "featured";
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "All"));
  render();
}
document.getElementById("clearFilters").addEventListener("click", resetFilters);
document.getElementById("resetSearch").addEventListener("click", resetFilters);
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) { event.preventDefault(); searchInput.focus(); }
  if (event.key === "Escape" && document.activeElement === searchInput) { searchInput.value = ""; query = ""; render(); searchInput.blur(); }
});
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("toolCount").textContent = `${tools.length}+`;
render();
