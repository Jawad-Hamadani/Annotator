import { useContext } from "react";
import MainInput from "./MainInput";
import SegmentedDiv from "./SegmentedDiv";
import { DataContext } from "../../contexts/DataContext";
import OriginalSentence from "./OriginalSentence";

const Segmentation = () => {
  const {
    fixed: [fixed, setFixed],
  } = useContext(DataContext);
  return (
    <>
      <OriginalSentence />
      <MainInput />
      {fixed !== "" && <SegmentedDiv />}
    </>
  );
};

export default Segmentation;
