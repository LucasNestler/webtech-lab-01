const themeToggle = document.getElementById('themeToggle');

const searchInput = document.getElementById("searchInput");
const container = document.getElementById("collectionContainer");
const noResultsMsg = document.getElementById("noResultsMessage");

const toggleFormBtn = document.getElementById("toggleFormBtn");
const cancelFormBtn = document.getElementById("cancelFormBtn");
const formContainer = document.getElementById("formContainer");

const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

let itemsData = [
  { id: 1, title: "C++ Platformer Game Engine", category: "Project", description: "Developed a 2D platformer game engine entirely from scratch using C++, focusing on custom physics rendering." },
  { id: 2, title: "Inventory Management Web App", category: "Work", description: "Worked as a fullstack developer at a lab company, designing and deploying an inventory tracking system." },
  { id: 3, title: "Autonomous Sumo Wrestling Robot", category: "Project", description: "Designed and built an autonomous AI powered robot with an ESP32 for sumo wrestling competitions." },
  { id: 4, title: "Laboratory Analysis Request Portal", category: "Work", description: "Developed a full-stack B2B web application allowing external client companies to seamlessly submit, track, and manage sample analysis requests." },
  { id: 5, title: "Everything Everywhere All at Once", category: "TV", description: "My Favorite Movie, 10/10 Would Recommend!" },
  { id: 6, title: "Mr. Robot", category: "TV", description: "My Favorite TV Show! it's about a cybersecurity expert with drug addiction, really crazy, but super interesting!" }
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
    card.dataset.id = item.id;

    const category = document.createElement("span");
    category.classList.add("card-category");
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = item.title;


    const description = document.createElement("p");
    description.classList.add("card-description", "hidden");
    description.textContent = item.description;


    const actions = document.createElement("div");
    actions.classList.add("card-actions");

    const expandBtn = document.createElement("button");
    expandBtn.type = "button";
    expandBtn.classList.add("btn-action", "btn-expand");
    expandBtn.textContent = "Show Description";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("btn-action", "btn-delete");
    deleteBtn.textContent = "Delete";


    actions.appendChild(expandBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(actions);

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

function toggleForm(show) {
  const isCurrentlyHidden = formContainer.classList.contains("hidden");
  const shouldShow = show !== undefined ? show : isCurrentlyHidden;

  if (shouldShow) {
    formContainer.classList.remove("hidden");
    toggleFormBtn.setAttribute("aria-expanded", "true");
    document.getElementById("itemTitle").focus();
  } else {
    formContainer.classList.add("hidden");
    toggleFormBtn.setAttribute("aria-expanded", "false");
    addItemForm.reset();
  }
}

function validateField(inputElement, errorElementId, errorMessage, customCondition = true) {
  const errorElement = document.getElementById(errorElementId);
  const isFieldValid = inputElement.value.trim() !== "" && customCondition;
  
  if (!isFieldValid) {
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("hidden");
    inputElement.classList.add("input-error");
    
    inputElement.setAttribute("aria-describedby", errorElementId);
    inputElement.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
    inputElement.classList.remove("input-error");
    
    inputElement.removeAttribute("aria-describedby");
    inputElement.removeAttribute("aria-invalid");
    return true;
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    contactSuccess.classList.add("hidden");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = validateField(
      nameInput, 
      "nameError", 
      "Full name is required."
    );

    const isEmailValid = validateField(
      emailInput, 
      "emailError", 
      "Please enter a valid email address (e.g., name@example.com).", 
      emailRegex.test(emailInput.value.trim())
    );

    const isMessageValid = validateField(
      messageInput, 
      "messageError", 
      "Message cannot be empty."
    );

    const isFormValid = isNameValid && isEmailValid && isMessageValid;

    if (isFormValid) {
      contactSuccess.classList.remove("hidden");
      contactForm.reset();
    }
  });
}

toggleFormBtn.addEventListener("click", () => toggleForm());
cancelFormBtn.addEventListener("click", () => toggleForm(false));
addItemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newItem = {
    id: Date.now(),
    title: document.getElementById("itemTitle").value.trim(),
    category: document.getElementById("itemCategory").value.trim(),
    description: document.getElementById("itemDescription").value.trim()
  };

  itemsData.push(newItem);
  renderCollection(itemsData);

  toggleForm(false);
});

searchInput.addEventListener("input", handleSearch);

collectionContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const itemId = Number(card.dataset.id);

  if (e.target.classList.contains("btn-delete")) {
    itemsData = itemsData.filter(item => item.id !== itemId);
    renderCollection(itemsData);
  }

  if (e.target.classList.contains("btn-expand")) {
    const description = card.querySelector(".card-description");
    const isHidden = description.classList.contains("hidden");

    description.classList.toggle("hidden");
    e.target.textContent = isHidden ? "Hide Description" : "Show Description";
  }
});

renderCollection(itemsData);