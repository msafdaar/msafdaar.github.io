const projects = [
  {
    title: "Educational Apps for Kids",
    items: [
      {
        name: "Kaida",
        featured: true,
        description: "Basic shapes and sounds of individual letters, in English and Urdu.",
        demo: "educational-apps-for-kids/kaida/",
        source: "https://github.com/msafdaar/educational-apps-for-kids",
      },
      {
        name: "LineReader",
        description: "A magnifier that makes text more readable by zooming in.",
        demo: "educational-apps-for-kids/lineReader/",
        source: "https://github.com/msafdaar/educational-apps-for-kids",
      },
      {
        name: "Math Worksheet Generator",
        description: "Print addition and subtraction worksheets with customizable upper and lower number limits.",
        demo: "educational-apps-for-kids/math-worksheet-generator/",
        source: "https://github.com/msafdaar/educational-apps-for-kids",
      },
    ],
  },
  {
    title: "Games",
    items: [
      {
        name: "Pick and Remember",
        featured: true,
        description: "A memory game where you win by picking each item exactly once.",
        demo: "theOdinProject-javascript/memory-game/build",
        source: "https://github.com/msafdaar/theOdinProject-javascript",
      },
      {
        name: "Rock Paper Scissors",
        description: "Play the classic game against the computer.",
        demo: "theOdinProject-foundations/rock-paper-scissors/",
        source: "https://github.com/msafdaar/theOdinProject-foundations",
      },
      {
        name: "Tic Tac Toe",
        description: "Two players take turns marking a 3x3 grid; the first to line up three marks wins.",
        demo: "theOdinProject-javascript/tic-tac-toe",
        source: "https://github.com/msafdaar/theOdinProject-javascript",
      },
    ],
  },
  {
    title: "Basic Tools",
    items: [
      {
        name: "Calculator",
        description: "A plain and simple calculator.",
        demo: "theOdinProject-foundations/calculator/",
        source: "https://github.com/msafdaar/theOdinProject-foundations",
      },
      {
        name: "Image Slider",
        description: "An image slider with control buttons.",
        demo: "theOdinProject-javascript/image-slider",
        source: "https://github.com/msafdaar/theOdinProject-javascript",
      },
      {
        name: "Sketchpad",
        description: "Draw freely on a square board and make pixel art.",
        demo: "theOdinProject-foundations/etch-a-sketch/",
        source: "https://github.com/msafdaar/theOdinProject-foundations",
      },
      {
        name: "Todo List",
        description: "A task list with local-storage support, inspired by Google Keep.",
        demo: "theOdinProject-javascript/todo-list",
        source: "https://github.com/msafdaar/theOdinProject-javascript",
      },
      {
        name: "Weather Check",
        description: "A basic weather checker powered by the OpenWeatherMap API.",
        demo: "theOdinProject-javascript/openweathermap",
        source: "https://github.com/msafdaar/theOdinProject-javascript",
      },
    ],
  },
  {
    title: "Other Apps",
    items: [
      {
        name: "Feed Energy Protein",
        featured: true,
        description: "A nutrition calculator for formulating chicken feed.",
        demo: "feed-energy-protien/",
        source: "https://github.com/msafdaar/feed-energy-protien",
      },
    ],
  },
];

(function renderProjects() {
  const container = document.querySelector("[data-projects]");
  if (!container) return;

  const featuredOrder = ["Pick and Remember", "Feed Energy Protein", "Kaida"];

  const allItems = projects.reduce((acc, section) => acc.concat(section.items), []);
  const featured = allItems
    .filter((item) => item.featured)
    .sort((a, b) => featuredOrder.indexOf(a.name) - featuredOrder.indexOf(b.name));

  function renderSection(title, items) {
    const sectionEl = document.createElement("section");
    sectionEl.className = "projects-section";

    const titleEl = document.createElement("h2");
    titleEl.className = "projects-section-title";
    titleEl.textContent = title;
    sectionEl.appendChild(titleEl);

    const listEl = document.createElement("ul");
    listEl.className = "project-list";

    items.forEach((item) => {
      const cardEl = document.createElement("li");
      cardEl.className = "project-card";

      const cardBody = document.createElement("div");
      const nameEl = document.createElement("h3");
      nameEl.className = "project-name";
      nameEl.textContent = item.name;
      const descEl = document.createElement("p");
      descEl.className = "project-description";
      descEl.textContent = item.description;
      cardBody.appendChild(nameEl);
      cardBody.appendChild(descEl);

      const linksEl = document.createElement("div");
      linksEl.className = "project-links";

      const demoLink = document.createElement("a");
      demoLink.className = "project-link";
      demoLink.href = item.demo;
      demoLink.target = "_blank";
      demoLink.rel = "noopener";
      demoLink.textContent = "Live demo ";

      const demoArrow = document.createElement("span");
      demoArrow.setAttribute("aria-hidden", "true");
      demoArrow.textContent = "\u2197";
      demoLink.appendChild(demoArrow);

      const sourceLink = document.createElement("a");
      sourceLink.className = "project-link";
      sourceLink.href = item.source;
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener";
      sourceLink.textContent = "Source ";

      const sourceArrow = document.createElement("span");
      sourceArrow.setAttribute("aria-hidden", "true");
      sourceArrow.textContent = "\u2197";
      sourceLink.appendChild(sourceArrow);

      linksEl.appendChild(demoLink);
      linksEl.appendChild(sourceLink);

      cardEl.appendChild(cardBody);
      cardEl.appendChild(linksEl);
      listEl.appendChild(cardEl);
    });

    sectionEl.appendChild(listEl);
    container.appendChild(sectionEl);
  }

  function renderHeading(text) {
    const headingEl = document.createElement("h2");
    headingEl.className = "all-projects-heading";
    headingEl.textContent = text;
    container.appendChild(headingEl);
  }

  if (featured.length > 0) {
    renderSection("Featured projects", featured);
  }
  renderHeading("All projects");
  projects.forEach((section) => renderSection(section.title, section.items));
})();