const YODA_API_URL = "https://api.funtranslations.com/translate/yoda.json";

export async function fetchYodaTranslation(text: string) {
  const response = await fetch(`${YODA_API_URL}?text=${text}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.contents.translated;
}
