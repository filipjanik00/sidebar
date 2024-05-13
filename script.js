const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".open-btn");
const xBtn = document.querySelector(".x-btn");

openBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    // Show the menu
    menu.classList.remove("hidden");

    // Slide in animation
    gsap.fromTo(
      ".menu", // Target element
      { x: "-100%" }, // From
      { duration: 0.5, ease: "power2.out", x: 0 } // To
    );
  } else {
    // Slide out animation
    gsap.to(
      ".menu", // Target element
      {
        duration: 0.5,
        ease: "power2.out",
        x: "-100%",
        onComplete: () => menu.classList.add("hidden"),
      } // To
    );
  }
});

xBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");

    gsap.fromTo(
      ".menu",
      { x: "-100%" },
      { duration: 0.5, ease: "power2.out", x: 0 }
    );
  } else {
    gsap.to(".menu", {
      duration: 0.5,
      ease: "power2.out",
      x: "-100%",
      onComplete: () => menu.classList.add("hidden"),
    });
  }
});
