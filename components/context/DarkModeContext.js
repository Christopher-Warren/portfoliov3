import React from "react";

const LanguageContext = React.createContext({
  language: false,
  setLanguage: () => {},
});

export default LanguageContext;
