function setupAlbumToggle() {
  const albumLinks = document.querySelectorAll(".album-list li");
  
  const albumSections = document.querySelectorAll(".album-detail");

  if (!albumLinks.length || !albumSections.length) return;

  albumLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("data-album");

      albumSections.forEach(section => section.classList.remove("active"));

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

export default setupAlbumToggle;
