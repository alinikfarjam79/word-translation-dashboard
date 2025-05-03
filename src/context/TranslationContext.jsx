"use client";

import { createContext, useState, useEffect } from "react";

const TranslationContext = createContext();

const initialData = [
  {
    id: "1",
    keyword: "hello",
    translations: { en: "Hello", fa: "سلام", fr: "Bonjour" },
  },
  {
    id: "2",
    keyword: "world",
    translations: { en: "World", fa: "جهان", fr: "Monde" },
  },
  {
    id: "3",
    keyword: "apple",
    translations: { en: "Apple", fa: "سیب", fr: "" },
  },
  {
    id: "4",
    keyword: "book",
    translations: { en: "Book", fa: "کتاب", fr: "Livre" },
  },
  { id: "5", keyword: "key", translations: { en: "Key", fa: "", fr: "Clé" } },
  {
    id: "6",
    keyword: "head",
    translations: { en: "Head", fa: "سر", fr: "Tête" },
  },
  {
    id: "7",
    keyword: "green",
    translations: { en: "Green", fa: "سبز", fr: "Vert" },
  },
  {
    id: "8",
    keyword: "food",
    translations: { en: "Food", fa: "", fr: "Nourriture" },
  },
];

export const TranslationProvider = ({ children }) => {
  const [keywords, setKeywords] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("translations");
      return saved ? JSON.parse(saved) : initialData;
    }
    return initialData;
  });
  const [language, setLanguage] = useState("fa");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("translations", JSON.stringify(keywords));
    }
  }, [keywords]);

  const addKeyword = (newKeyword) => {
    const newId = (keywords.length + 1).toString();
    setKeywords([
      ...keywords,
      {
        id: newId,
        keyword: newKeyword.toLowerCase(),
        translations: { en: "", fa: "", fr: "" },
      },
    ]);
  };

  const updateTranslation = (id, lang, translation) => {
    setKeywords(
      keywords.map((kw) =>
        kw.id === id
          ? { ...kw, translations: { ...kw.translations, [lang]: translation } }
          : kw
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(keywords);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setKeywords(items);
  };

  return (
    <TranslationContext.Provider
      value={{
        keywords,
        language,
        setLanguage,
        addKeyword,
        updateTranslation,
        onDragEnd,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContext;
