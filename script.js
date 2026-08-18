const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  // 1. Toggle the class on the body (returns true if class was added, false if removed)
  const isDark = document.body.classList.toggle('dark-theme');

  // 2. Sync the ARIA attribute with the toggle state
  themeToggle.setAttribute('aria-pressed', isDark);
});

// 1. Array of at least 6 objects (3+ fields each, including category)
const itemsData = [
  { title: "C++ Platformer Game Engine", category: "Project", description: "Developed a 2D platformer game engine entirely from scratch using C++, focusing on custom physics rendering." },
  { title: "Inventory Management Web App", category: "Work", description: "Worked as a fullstack developer at a lab company, designing and deploying an inventory tracking system." },
  { title: "Autonomous Sumo Wrestling Robot", category: "Project", description: "Designed and built an autonomous AI powered robot with an ESP32 for sumo wrestling competitions." },
  { title: "Laboratory Analysis Request Portal", category: "Work", description: "Developed a full-stack B2B web application allowing external client companies to seamlessly submit, track, and manage sample analysis requests." },
  { title: "Everything Everywhere All at Once", category: "TV", description: "My Favorite Movie, 10/10 Would Recommend!" },
  { title: "Mr. Robot", category: "TV", description: "My Favorite TV Show! it's about a cybersecurity expert with drug addiction, really crazy, but super interesting!" }
];

// 2. Render function using standard DOM creation methods
function renderCollection(items) {
  const container = document.getElementById("collectionContainer");
  
  // Clear any existing content
  container.textContent = "";

  items.forEach(item => {
    // Create card container
    const card = document.createElement("article");
    card.classList.add("card");

    // Create Category Element
    const category = document.createElement("span");
    category.classList.add("card-category");
    category.textContent = item.category;

    // Create Title Element
    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = item.title;

    // Create Description Element
    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = item.description;

    // Append child nodes to card
    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);

    // Append card to main grid container
    container.appendChild(card);
  });
}

// 3. Initialize rendering on script load
renderCollection(itemsData);