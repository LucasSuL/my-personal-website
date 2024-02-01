import { useEffect } from "react";

export const useNavItemIndicator = () => {
  useEffect(() => {
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var sections = document.querySelectorAll("section");
    var isScrollingDisabled = false;

    // navitem indicator
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        isScrollingDisabled = true;

        navLinks.forEach(function (innerLink) {
          innerLink.classList.remove("active");
        });

        link.classList.add("active");

        var sectionIndex = Array.from(navLinks).indexOf(link);

        // scroll to the corresponding part
        sections[sectionIndex].scrollIntoView({ behavior: "smooth" });

        setTimeout(function () {
          isScrollingDisabled = false;
        }, 800);
      });
    });

    // responsive indicator when scrolling
    window.addEventListener("scroll", function () {
      if (!isScrollingDisabled) {
        var currentScroll = window.scrollY;

        sections.forEach(function (section, index) {
          var sectionTop = section.offsetTop - 300;
          var sectionBottom = sectionTop + section.offsetHeight;

          if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            navLinks.forEach(function (innerLink) {
              innerLink.classList.remove("active");
            });

            navLinks[index].classList.add("active");
          }
        });
      }
    });
  }, []);
};
