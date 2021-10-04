import React, { useContext } from 'react';
import { TokenContext } from '../../contexts/TokenContext';

const Word = ({
  content,
  words,
  index,
  joinWords,
  isActiveIndex,
  splitWords,
}) => {
  const letters = content.split('');
  const {  showToken : [showToken, toggleShowToken]} = useContext(TokenContext);
  const { word : [word, setWord] } = useContext(TokenContext);
  const {wordDisplay : [wordDisplay, setWordDisplay] }=useContext(TokenContext);

  return (
    <>
      <div className={isActiveIndex ? 'words-input-active' : 'morphology-div'}>
        {words[words.length - 1] !== content && !showToken &&(
          <i
            onClick={() => {
              joinWords(index, index + 1);
            }}
            className='fas fa-arrow-left arrow'
          ></i>
        )}
        <input
          value={content}
          style={{
            maxWidth: `${content.length+1}ch`,
          }}
          className='words-input'
          onClick={(e) => {      
            if(showToken){
              setWord([content]);
              setWordDisplay(content); 
            }else{
              splitWords(content, e, index)
            }   
          }}
        />
        {words[0] !== content && !showToken &&(
          <i
            onClick={() => joinWords(index, index - 1)}
            className='fas fa-arrow-right arrow'
          ></i>
        )}
      </div>
    </>
  );
};

export default Word;
