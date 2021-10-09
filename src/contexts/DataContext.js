import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [coda, setCoda] = useState([]);
  const [fixed, setFixed] = useState("");
  const [raw, setRaw] = useState(fixed.split(" ").filter((e) => e));

  return (
    <DataContext.Provider
      value={{
        raw: [raw, setRaw],
        fixed: [fixed, setFixed],
        coda: [coda, setCoda],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
