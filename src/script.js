function initialApp() {
  const arrow = document.querySelector(".arrow");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenuSection = document.querySelector("#mobile-menu");

  arrow.classList.add("hidden");
  const toggleNavBtn = hamburgerBtn.closest("button");

  function toggleNav() {
    if (mobileMenuSection.classList.contains("hidden")) {
      mobileMenuSection.classList.remove("hidden");
      mobileMenuSection.classList.add("flex");
      hamburgerBtn.classList.add("toggle-btn");
    } else {
      mobileMenuSection.classList.add("hidden");
      mobileMenuSection.classList.remove("flex");
      hamburgerBtn.classList.remove("toggle-btn");
    }
  }

  // function hideNav() {
  //   mobileMenuSection.classList.add("hidden");
  //   mobileMenuSection.classList.remove("flex");
  // }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 492) {
      arrow.classList.remove("hidden");
    } else {
      arrow.classList.add("hidden");
    }
  });

  window.addEventListener("resize", (e) => {
    if (window.innerWidth >= 640) {
      mobileMenuSection.classList.add("hidden");
      mobileMenuSection.classList.remove("flex");
      hamburgerBtn.classList.remove("toggle-btn");
    }
  });

  toggleNavBtn.addEventListener("click", toggleNav);
  mobileMenuSection.addEventListener("click", toggleNav);

  document.addEventListener("click", (e) => {
    if (
      !hamburgerBtn.contains(e.target) &&
      !mobileMenuSection.contains(e.target)
    ) {
      mobileMenuSection.classList.add("hidden");
      mobileMenuSection.classList.remove("flex");
      hamburgerBtn.classList.remove("toggle-btn");
      console.log(!mobileMenuSection.contains(e.target));
    }
  });
  // arrow.addEventListener('click', () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  // });
}

document.addEventListener("DOMContentLoaded", initialApp);
