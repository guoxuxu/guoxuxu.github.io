// ----- Sample paper data -----
const papers = [
    {
        title: "Sample Paper A",
        authors: "Alice, Bob",
        year: 2023,
        category: "3D Vision",
        img: "example1.jpg",
        link: "paperA/index.html",
        buttons: ["PDF", "Code"]
    },
    {
        title: "Sample Paper B",
        authors: "David, Emma",
        year: 2022,
        category: "LLM",
        img: "example2.jpg",
        link: "paperB/index.html",
        buttons: ["PDF", "Dataset"]
    },
    {
        title: "Sample Paper C",
        authors: "Kevin, John",
        year: 2021,
        category: "Reconstruction",
        img: "example1.jpg",
        link: "paperC/index.html",
        buttons: ["PDF"]
    }
];

// ----- Build Category Filter -----
const categorySet = new Set(papers.map(p => p.category));
const categoryFilter = document.getElementById("categoryFilter");

categorySet.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.innerText = cat;
    categoryFilter.appendChild(opt);
});

// ----- Render Papers by Year -----
function render(papersList) {
    const container = document.getElementById("pubContainer");
    container.innerHTML = "";

    let grouped = {};
    papersList.forEach(p => {
        if (!grouped[p.year]) grouped[p.year] = [];
        grouped[p.year].push(p);
    });

    const years = Object.keys(grouped).sort((a, b) => b - a);

    years.forEach(year => {
        // Year title
        const yearTitle = document.createElement("div");
        yearTitle.className = "year-title";
        yearTitle.innerText = year;
        container.appendChild(yearTitle);

        // Year block
        const yearBlock = document.createElement("div");
        yearBlock.className = "paper-block";

        grouped[year].forEach(p => {
            const item = document.createElement("div");
            item.className = "paper-item fade-in";

            item.innerHTML = `
                <div class="paper-img-wrapper">
                    <img src="${p.img}" class="paper-img">
                </div>

                <div class="paper-info">
                    <a href="${p.link}" class="paper-title">${p.title}</a>
                    <div class="paper-authors">${p.authors}</div>
                    <div class="paper-buttons">
                        ${p.buttons.map(b => `<button class="paper-btn">${b}</button>`).join("")}
                    </div>
                </div>
            `;
            yearBlock.appendChild(item);
        });

        container.appendChild(yearBlock);
    });
}
render(papers);

// ----- Search + Filter -----
const searchInput = document.getElementById("searchInput");
function applyFilters() {
    const keyword = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;

    const filtered = papers.filter(p => {
        const matchKeyword =
            p.title.toLowerCase().includes(keyword) ||
            p.authors.toLowerCase().includes(keyword);

        const matchCat = (cat === "all") || (p.category === cat);

        return matchKeyword && matchCat;
    });

    render(filtered);
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
