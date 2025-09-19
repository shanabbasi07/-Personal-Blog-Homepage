const posts = [
  {
    title: "JavaScript Basics",
    category: "tech",
    date: "2025-09-01",
    desc: "Learn the fundamentals of JavaScript.",
    img: "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?_gl=1*12x5kp4*_ga*MjI5MjMwMDAzLjE3NTc5NjQ1ODA.*_ga_8JE65Q40S6*czE3NTgxMjg0MDUkbzQkZzAkdDE3NTgxMjg0MDUkajYwJGwwJGgw"
  },
  {
    title: "Exploring Paris",
    category: "travel",
    date: "2025-08-25",
    desc: "My journey through the streets of Paris.",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Best Pasta Recipes",
    category: "food",
    date: "2025-08-20",
    desc: "Delicious pasta recipes for food lovers.",
    img: "https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "React vs Vue",
    category: "tech",
    date: "2025-07-15",
    desc: "Comparing two popular frontend frameworks.",
    img: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Backpacking in Asia",
    category: "travel",
    date: "2025-07-01",
    desc: "Tips for budget-friendly backpacking.",
    img: "https://media.istockphoto.com/id/521430248/photo/rising-up.jpg?s=612x612&w=0&k=20&c=ab_YlPRlETCvhdRmWFD52Dc8iXH4wygyhY4aV8g-9M8="
  },
  {
    title: "Street Food Tour",
    category: "food",
    date: "2025-06-18",
    desc: "The best street food experiences worldwide.",
    img: "https://images.unsplash.com/photo-1730324772024-f313bc2fa0f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjB0b3VyfGVufDB8fDB8fHww"
  }
];

const postsContainer = document.getElementById("postsContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let currentPage = 1;
const postsPerPage = 3;

function renderPosts() {
  postsContainer.innerHTML = "";

  const filteredPosts = posts.filter(post => {
    const matchesCategory = categoryFilter.value === "all" || post.category === categoryFilter.value;
    const matchesSearch = post.title.toLowerCase().includes(searchInput.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  currentPage = Math.min(currentPage, totalPages) || 1;

  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, start + postsPerPage);

  paginatedPosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.desc}</p>
      <small>${post.date}</small>
    `;
    postsContainer.appendChild(card);
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

categoryFilter.addEventListener("change", () => {
  currentPage = 1;
  renderPosts();
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderPosts();
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  renderPosts();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  renderPosts();
});

renderPosts();
