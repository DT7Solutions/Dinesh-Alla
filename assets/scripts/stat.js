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


// Portfolio scroll start
document.addEventListener("DOMContentLoaded", () => {
  const portfolioCards = document.querySelector("#portfolio-cards");
  const cards = Array.from(portfolioCards.querySelectorAll(".portfolio-card"));

  portfolioCards.addEventListener("scroll", () => {
    const scrollTop = portfolioCards.scrollTop;
    const maxScroll = portfolioCards.scrollHeight - portfolioCards.clientHeight;

     if (scrollTop === 0) {
      portfolioCards.style.overflowY = "hidden";
      window.scrollBy(0, -10); // Scroll the page up
    }

    // working good in mobile
    // Handle when reaching the bottom of the section
    if (scrollTop >= maxScroll) {
      portfolioCards.style.overflowY = "hidden";
      window.scrollBy(0, 10); // Scroll the page down
      setTimeout(() => {
        portfolioCards.style.overflowY = "auto"; // Restore overflow
      }, 10);
    }

    // working good in laptop and mobile simulator extension
    // if (scrollTop >= maxScroll) {
    //   portfolioCards.style.overflowY = "hidden";
    //   window.scrollBy(0, 10); // Scroll the page down
    // }

    if (scrollTop > 0 && scrollTop < maxScroll) {
      portfolioCards.style.overflowY = "auto";
    }
  });

  portfolioCards.addEventListener("touchstart", () => {
    portfolioCards.style.overflowY = "auto";
  });

  portfolioCards.addEventListener("mouseleave", () => {
    portfolioCards.style.overflowY = "auto";
  });
});
// Portfolio scroll end