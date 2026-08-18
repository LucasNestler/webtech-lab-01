const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById("searchInput");
const container = document.getElementById("collectionContainer");
const noResultsMsg = document.getElementById("noResultsMessage");

const itemsData = [
  { title: "C++ Platformer Game Engine", category: "Project", description: "Developed a 2D platformer game engine entirely from scratch using C++, focusing on custom physics rendering." },
  { title: "Inventory Management Web App", category: "Work", description: "Worked as a fullstack developer at a lab company, designing and deploying an inventory tracking system." },
  { title: "Autonomous Sumo Wrestling Robot", category: "Project", description: "Designed and built an autonomous AI powered robot with an ESP32 for sumo wrestling competitions." },
  { title: "Laboratory Analysis Request Portal", category: "Work", description: "Developed a full-stack B2B web application allowing external client companies to seamlessly submit, track, and manage sample analysis requests." },
  { title: "Everything Everywhere All at Once", category: "TV", description: "My Favorite Movie, 10/10 Would Recommend!" },
  { title: "Mr. Robot", category: "TV", description: "My Favorite TV Show! it's about a cybersecurity expert with drug addiction, really crazy, but super interesting!" }
];

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');

  themeToggle.setAttribute('aria-pressed', isDark);
});

function renderCollection(items) {
  container.textContent = "";

  if (items.length === 0) {
    noResultsMsg.classList.remove("hidden");
    return;
  } else {
    noResultsMsg.classList.add("hidden");
  }

  items.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("card");

    const category = document.createElement("span");
    category.classList.add("card-category");
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = item.description;

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);
    container.appendChild(card);
  });
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredItems = itemsData.filter(item => {
    const matchesName = item.title.toLowerCase().includes(query);
    const matchesCategory = item.category.toLowerCase().includes(query);

    return matchesName || matchesCategory;
  });

  renderCollection(filteredItems);
}

searchInput.addEventListener("input", handleSearch);

renderCollection(itemsData);