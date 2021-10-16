// MIT License
//
// Copyright 2021 Mohammad Jawad Moshati Hamadani
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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
