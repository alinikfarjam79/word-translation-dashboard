"use client";

import TranslationContext from "@/context/TranslationContext";
import { useContext } from "react";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(TranslationContext);
  return (
    <select
      className=" p-2 border rounded"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
      <option value="fr">French</option>
    </select>
  );
};

export default LanguageSelector;
