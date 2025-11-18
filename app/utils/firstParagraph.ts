export function firstParagraph(text: string) {
  const firstParagraph = new DOMParser()
    .parseFromString(text, "text/html")
    .querySelector("p")
    ?.textContent.trim();

  return firstParagraph;
}
