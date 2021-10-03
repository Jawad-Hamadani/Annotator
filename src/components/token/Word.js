import React, { useContext, useEffect, useState } from 'react';
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
  const word = words[index];
  const {  showToken : [showToken, toggleShowToken]} = useContext(TokenContext);
  return (
    <>
      <div className={isActiveIndex ? 'words-input-active' : 'morphology-div'}>
        {words[words.length - 1] !== content && (
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
            splitWords(content, e, index);
          }}
           disabled={showToken && true}
        />
        {words[0] !== content && (
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
