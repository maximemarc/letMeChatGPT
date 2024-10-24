function getQueryParam(parameter) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(parameter);
}

function simulateTyping(element, text, delay = 100) {
  let characterIndex = 0;
  const intervalId = setInterval(() => {
    if (characterIndex < text.length) {
      element.value += text[characterIndex];
      characterIndex++;
    } else {
      clearInterval(intervalId);
      element.focus();
    }
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  const mouseElement = document.getElementById("mouse");
  const searchInputElement = document.getElementById("searchInput");
  const queryParameter = "test";

  if (queryParameter) {
    mouseElement.style.display = "block";
    mouseElement.addEventListener("animationend", () => {
      simulateTyping(searchInputElement, queryParameter);
    });
  } else {
    searchInputElement.focus();
  }
});
