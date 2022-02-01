import React, { useState } from "react";
import { Input, Form, Header } from "semantic-ui-react";
import DropdownMenu from "./DropdownMenu";
import languageOptions from "../Util/languageOptions";
import Convert from "./Convert";

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [inputText, setInputText] = useState("");
  const onInputChange = (e) => setInputText(e.target.value);
  console.log(inputText);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Write Text to Translate</label>
          <Input value={inputText} onChange={(e) => onInputChange(e)} />
        </Form.Field>
      </Form>

      <DropdownMenu
        fluid
        search
        selection
        label="Select a Language"
        options={languageOptions}
        selected={selectedLanguage}
        onChangeSelected={setSelectedLanguage}
      />
      <hr />
      <Header size="medium">Translated Text</Header>
      <Convert
        selectedLanguage={selectedLanguage}
        inputText={inputText}
      ></Convert>
    </div>
  );
};

export default Translate;
