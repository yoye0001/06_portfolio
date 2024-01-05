document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector("header nav ul");

  burgerMenu.addEventListener("click", () => {
    console.log("Burger clicked");
    burgerMenu.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  // Close the menu when a navigation item is clicked
  document.querySelectorAll("header nav ul li a").forEach((item) => {
    item.addEventListener("click", () => {
      console.log("Link clicked");
      burgerMenu.classList.remove("active");
      navLinks.classList.remove("show");
    });
  });
});
