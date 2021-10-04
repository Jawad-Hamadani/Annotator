import { useContext } from "react";
import MainInput from './MainInput'
import SegmentedDiv from "./SegmentedDiv";
import { SentencesContext } from "../../contexts/SentencesContext";

const Segmentation = () =>{
    const {  sentence: [sentence, setSentence] } = useContext(SentencesContext);
return(
    <>
        <MainInput />    
        {sentence !== '' && <SegmentedDiv /> }   
    </>
)}

export default Segmentation;

