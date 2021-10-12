import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import SelectGroup from "../utilities/SelectGroup";

const Taxonomy = ({ tags }) => {
  const selectStyle = {
    marginTop: "0.5em",
    borderRadius: "0",
    width: "100%",
    display: "flex",
  };
  const {
    taxonomy: [taxonomy, setTaxonomy],
  } = useContext(DataContext);

  const addTaxonomy = () => {
    if (taxonomy.length === 4) {
      return;
    }
    let temp = [...taxonomy, ""];
    setTaxonomy(temp);
  };

  const changeTaxonomy = (e, index) => {
    let temp = [...taxonomy];
    temp[index] = e;
    setTaxonomy(temp);
  };

  useEffect(() => {}, []);

  const gridTaxonomy = {
    display: "grid",
    gridTemplateColumns: `repeat(${taxonomy.length}, 1fr)`,
    gridGap: "0.3em",
  };

  return (
    <div className="grid-5">
      <div style={gridTaxonomy}>
        {taxonomy.map((item, i) => (
          <SelectGroup
            styleT={selectStyle}
            formSize="small"
            options={tags.taxonomy}
            variant="outlined"
            formWidth="100%"
            onChange={(e) => changeTaxonomy(e, i)}
          />
        ))}
      </div>

      <i
        class="fas fa-lg fa-plus"
        onClick={() => {
          addTaxonomy();
        }}
      ></i>
    </div>
  );
};

export default Taxonomy;
