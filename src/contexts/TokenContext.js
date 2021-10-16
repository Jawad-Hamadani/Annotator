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

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [showToken, toggleShowToken] = useState(false);
  const [word, setWord] = useState([""]);
  const [canResetMorph, toggleCanResetMorph] = useState(false);
  const [chosenWordForMorphology, setChosenWordForMorphology] = useState(null);

  return (
    <TokenContext.Provider
      value={{
        showToken: [showToken, toggleShowToken],
        word: [word, setWord],
        canResetMorph: [canResetMorph, toggleCanResetMorph],
        chosenWordForMorphology: [
          chosenWordForMorphology,
          setChosenWordForMorphology,
        ],
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
