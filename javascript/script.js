document.addEventListener("DOMContentLoaded", () => {
  // DOM queries
  const keyIdeaButton = document.querySelector("#change-key-idea");
  const keyIdeaParagraph = document.querySelector(".key-idea p");
  const contrastButton = document.querySelector("#toggle-contrast");
  const body = document.body;
  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const dayMessage = document.querySelector("#day-message");
  const header = document.querySelector("header");

  // Store the original key-idea text so we can toggle
  let originalKeyIdea = keyIdeaParagraph ? keyIdeaParagraph.textContent : "";
  let keyIdeaToggled = false;

  // Update page content
  function updateKeyIdea() {
    if (!keyIdeaParagraph) return;

    if (!keyIdeaToggled) {
      keyIdeaParagraph.textContent =
        "88Rising’s pivot toward K-pop-style acts changed their core identity. " +
        "While it opened doors to a new audience, it also distanced the fans " +
        "who first connected with their experimental hip-hop and R&B roots.";
      keyIdeaToggled = true;
    } else {
      keyIdeaParagraph.textContent = originalKeyIdea;
      keyIdeaToggled = false;
    }
  }

  // Change contrast in CSS
  function toggleHighContrast() {
    body.classList.toggle("high-contrast");

    if (body.classList.contains("high-contrast")) {
      contrastButton.textContent = "Turn Off High Contrast";
    } else {
      contrastButton.textContent = "Turn On High Contrast";
    }
  }

  // Nav Toggle
  function toggleNav() {
    if (!navMenu || !navToggle) return;

    const isOpen = navMenu.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  // Attach event listeners (for 3 pages)
  if (keyIdeaButton && keyIdeaParagraph) {
    keyIdeaButton.addEventListener("click", updateKeyIdea);
  }

  if (contrastButton) {
    contrastButton.addEventListener("click", toggleHighContrast);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleNav);
  }

  // Day of the week
  if (dayMessage && header) {
    const today = new Date();
    const dayIndex = today.getDay(); // 0 = Sunday, 6 = Saturday

    let message = "";
    let headerAccent = "";

    if (dayIndex === 0) {
      message = "Sunday: Chill day. Revisit Joji’s early SoundCloud era.";
      headerAccent = "#FBBF24";
    } else if (dayIndex === 1) {
      message = "Monday: Fresh start. What if 88Rising also reset their strategy?";
      headerAccent = "#60A5FA";
    } else if (dayIndex === 2) {
      message = "Tuesday: Deep dive. Explore how Asian labels adapt globally.";
      headerAccent = "#34D399";
    } else if (dayIndex === 3) {
      message = "Wednesday: Midweek reflection on 88Rising’s legacy.";
      headerAccent = "#A855F7";
    } else if (dayIndex === 4) {
      message = "Thursday: Throwback to the Higher Brothers era.";
      headerAccent = "#F97316";
    } else if (dayIndex === 5) {
      message = "Friday: Festival vibes. Imagine another Head In The Clouds.";
      headerAccent = "#EC4899";
    } else if (dayIndex === 6) {
      message = "Saturday: Perfect time to discover new Asian indie acts.";
      headerAccent = "#22C55E";
    }

    // Change message
    dayMessage.textContent = message;
    header.style.borderBottom = `4px solid ${headerAccent}`;
  }
});
