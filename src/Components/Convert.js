import React, { useState, useEffect } from "react";
import axios from "axios";
import TRANSLATE_API_KEY from "../Util/apiKeys";

const Convert = ({ selectedLanguage, inputText }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const onTranslateSubmit = async () => {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            q: inputText,
            target: selectedLanguage.value,
            key: TRANSLATE_API_KEY(),
          },
        }
      );
      setTranslated(response.data.data.translations[0].translatedText);
    };
    onTranslateSubmit();
  }, [selectedLanguage, inputText]);

  console.log(translated);
  return <div>{translated}</div>;
};

export default Convert;
