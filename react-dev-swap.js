(function () {
  function swapMenuItems() {
    if (sessionStorage.getItem("menuSwapped") === "true") {
      return;
    }

    const menuContainer = document.querySelector(
      ".text-base.justify-center.items-center.gap-1\\.5.flex"
    );
    if (!menuContainer) return;

    const menuLinks = menuContainer.querySelectorAll("a[href]");
    if (menuLinks.length < 4) return;

    let referenceLink, communityLink;

    menuLinks.forEach((link) => {
      if (link.getAttribute("href") === "/reference/react") {
        referenceLink = link.parentElement;
      } else if (link.getAttribute("href") === "/community") {
        communityLink = link.parentElement;
      }
    });

    if (
      referenceLink &&
      communityLink &&
      referenceLink.parentElement === communityLink.parentElement
    ) {
      const temp = document.createElement("div");

      referenceLink.parentNode.insertBefore(temp, referenceLink);

      referenceLink.parentNode.insertBefore(communityLink, temp);

      referenceLink.parentNode.insertBefore(referenceLink, temp.nextSibling);

      temp.parentNode.removeChild(temp);

      sessionStorage.setItem("menuSwapped", "true");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", swapMenuItems);
  } else {
    swapMenuItems();
  }
})();
