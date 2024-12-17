// Awards section 
function updateMainImage(imagePath) {
  document.getElementById("mainImage").src = imagePath;
}

// Blogs Start

// JavaScript for Popup Functionality
document.querySelectorAll(".open-popup").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const post = this.closest(".vlt-post");
    const title = post.querySelector(".vlt-post-title > a").textContent;
    const details = post.querySelector(".news_hidden_details .text").innerHTML;
    const imageSrc = post
      .querySelector(".vlt-post-thumbnail img")
      .getAttribute("src");

    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-details").innerHTML = details;
    document.getElementById("popup-image").setAttribute("src", imageSrc);
    document.getElementById("popup-modal").style.display = "block";
  });
});

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup-modal").style.display = "none";
});

window.addEventListener("click", function (e) {
  const modal = document.getElementById("popup-modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Blogs end 
