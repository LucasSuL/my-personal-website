export function animateHome() {
  document.addEventListener("DOMContentLoaded", function () {
    const firstParagraph = document.getElementsByClassName("cust-hero-body");
    const secondParagraph = document.getElementsByClassName("cust-hero-badge");

    // Trigger animation for the first paragraph
    setTimeout(function () {
      firstParagraph.style.opacity = "1";
      firstParagraph.style.transform = "translateY(0)";
    }, 300);

    // Trigger animation for the second paragraph
    setTimeout(function () {
      secondParagraph.style.opacity = "1";
      secondParagraph.style.transform = "translateY(0)";
    }, 1100); // Adjust timing as needed
  });
}