import { useContext } from "react";
import MainInput from "./MainInput";
import SegmentedDiv from "./SegmentedDiv";
import { DataContext } from "../../contexts/DataContext";

const Segmentation = () => {
  const {
    fixed: [fixed, setFixed],
  } = useContext(DataContext);
  return (
    <>
      <MainInput />
      {fixed !== "" && <SegmentedDiv />}
    </>
  );
};

export default Segmentation;
