import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const languageOptions = [
  {
    label: "Afrikaans",
    value: "Af",
  },
  {
    label: "Arabic",
    value: "Ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  // console.log(`from translate ${languageOptions[0].label}`);
  return (
    <DropdownMenu
      options={languageOptions}
      selected={selectedLanguage}
      onChangeSelected={setSelectedLanguage}
    />
  );
};

export default Translate;
