import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [coda, setCoda] = useState([]);
  const [original, setOriginal] = useState("");
  const [fixed, setFixed] = useState("");
  const [raw, setRaw] = useState(fixed.split(" ").filter((e) => e));
  const [lemma, setLemma] = useState("");
  const [dialect, setDialect] = useState("");
  const [gloss, setGloss] = useState("");
  const [taxonomy, setTaxonomy] = useState([""]);
  const [pos, setPos] = useState("");
  const [posValue, setPosValue] = useState("");
  const [nounForm, setNounForm] = useState("");
  const [verbForm, setVerbForm] = useState("");

  // const [tokens, setTokens] = useState([
  //   [
  //     {
  //         "text": "سرعه",
  //         "pos": "NOUN",
  //         "features": "1MS",
  //         "form": "NA",
  //         "lemma": "سرعة",
  //         "gloss": "speed",
  //         "flag": "n_flag",
  //         "dialect": "LEB"
  //     }
  // ],

  const [tokens, setTokens] = useState([]);

  const cleanUpData = () => {
    setFixed("");
    setRaw(fixed.split(" ").filter((e) => e));
    setOriginal("");
    setLemma("");
    setGloss("");
    setTaxonomy([""]);
    setDialect("");
    setPos("");
    setCoda("");
    setPosValue("");
    setNounForm("");
    setVerbForm("");
  };

  return (
    <DataContext.Provider
      value={{
        raw: [raw, setRaw],
        fixed: [fixed, setFixed],
        coda: [coda, setCoda],
        lemma: [lemma, setLemma],
        dialect: [dialect, setDialect],
        original: [original, setOriginal],
        gloss: [gloss, setGloss],
        taxonomy: [taxonomy, setTaxonomy],
        pos: [pos, setPos],
        posValue: [posValue, setPosValue],
        nounForm: [nounForm, setNounForm],
        verbForm: [verbForm, setVerbForm],
        tokens: [tokens, setTokens],
        cleanUp: cleanUpData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
