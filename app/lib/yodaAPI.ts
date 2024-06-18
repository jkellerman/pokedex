import { YodaTranslation } from "../types/yoda";
import { fetchData } from "./pokeAPI";

const YODA_API_URL = "https://api.funtranslations.com/translate/yoda.json";

export async function fetchYodaTranslation(text: string) {
  const data = await fetchData<YodaTranslation>(`${YODA_API_URL}?text=${text}`);

  return data.contents.translated;
}
