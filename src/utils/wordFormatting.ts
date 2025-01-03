export function safeWordToRegularWord(safeWord: string) {
  return safeWord.replaceAll("&", "/").replaceAll("_", " ");
}

export function regularWordToSafeWord(regularWord: string) {
  return regularWord.replaceAll("/", "&").replaceAll(" ", "_");
}

export function replaceStickLettersToPalochka(text: string) {
  text = text.toLowerCase();
  return text
    .replaceAll("1э", "ӏэ")
    .replaceAll("1ы", "ӏы")
    .replaceAll("1а", "ӏа")
    .replaceAll("1е", "ӏе")
    .replaceAll("1я", "ӏя")
    .replaceAll("1у", "ӏу")
    .replaceAll("1о", "ӏо")
    .replaceAll("iэ", "ӏэ")
    .replaceAll("iы", "ӏы")
    .replaceAll("iа", "ӏа")
    .replaceAll("iе", "ӏе")
    .replaceAll("iя", "ӏя")
    .replaceAll("iу", "ӏу")
    .replaceAll("iо", "ӏо")
    .replaceAll("\u04c0э", "ӏэ")
    .replaceAll("\u04c0ы", "ӏы")
    .replaceAll("\u04c0а", "ӏа")
    .replaceAll("\u04c0е", "ӏе")
    .replaceAll("\u04c0я", "ӏя")
    .replaceAll("\u04c0у", "ӏу")
    .replaceAll("\u04c0о", "ӏо")
    .replaceAll("\u0049э", "ӏэ")
    .replaceAll("\u0049ы", "ӏы")
    .replaceAll("\u0049а", "ӏа")
    .replaceAll("\u0049е", "ӏе")
    .replaceAll("\u0049я", "ӏя")
    .replaceAll("\u0049у", "ӏу")
    .replaceAll("\u0049о", "ӏо")
    .replaceAll("\u04cfэ", "ӏэ")
    .replaceAll("\u04cfы", "ӏы")
    .replaceAll("\u04cfа", "ӏа")
    .replaceAll("\u04cfе", "ӏе")
    .replaceAll("\u04cfя", "ӏя")
    .replaceAll("\u04cfу", "ӏу")
    .replaceAll("\u04cfо", "ӏо")
    .replaceAll("\u0069э", "ӏэ")
    .replaceAll("\u0069ы", "ӏы")
    .replaceAll("\u0069а", "ӏа")
    .replaceAll("\u0069е", "ӏе")
    .replaceAll("\u0069я", "ӏя")
    .replaceAll("\u0069у", "ӏу")
    .replaceAll("\u0069о", "ӏо")
    .replaceAll("\u006cэ", "ӏэ")
    .replaceAll("\u006cы", "ӏы")
    .replaceAll("\u006cа", "ӏа")
    .replaceAll("\u006cе", "ӏе")
    .replaceAll("\u006cя", "ӏя")
    .replaceAll("\u006cу", "ӏу")
    .replaceAll("\u006cо", "ӏо")
    .replaceAll("\u0456э", "ӏэ")
    .replaceAll("\u0456ы", "ӏы")
    .replaceAll("\u0456а", "ӏа")
    .replaceAll("\u0456е", "ӏе")
    .replaceAll("\u0456я", "ӏя")
    .replaceAll("\u0456у", "ӏу")
    .replaceAll("\u0456о", "ӏо");
}

export function replaceStickLettersToOne(text: string) {
  // Regular expression to match Cyrillic characters (Unicode range for Cyrillic)
  const cyrillicRegex = /^[\u0400-\u04FF]/;

  if (text.startsWith("к1")) {
    console.log("text", text);
  }

  let isLetterStartsWithCyrillicOrPalochka = false;
  text = text.toLowerCase();
  isLetterStartsWithCyrillicOrPalochka ||= cyrillicRegex.test(text.charAt(0));
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("ӏ");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iэ");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iа");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iе");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iу");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iя");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("iо");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0э");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0ы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0а");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0е");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0у");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0я");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04c0о");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049э");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049ы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049а");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049е");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049у");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049я");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0049о");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfэ");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfа");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfе");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfу");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfя");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u04cfо");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cэ");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cа");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cе");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cу");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cя");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u006cо");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069э");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069ы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069а");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069е");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069у");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069я");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0069о");

  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456э");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456ы");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456а");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456е");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456у");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456я");
  isLetterStartsWithCyrillicOrPalochka ||= text.startsWith("\u0456о");

  if (!isLetterStartsWithCyrillicOrPalochka) {
    return text;
  }

  return text
    .replaceAll("ӏ", "1")
    .replaceAll("i", "1")
    .replaceAll("\u04c0", "1")
    .replaceAll("\u0049", "1")
    .replaceAll("\u04cf", "1")
    .replaceAll("\u006c", "1")
    .replaceAll("\u0069", "1")
    .replaceAll("\u0456", "1");
}
