import React, { Fragment, useEffect, useState } from 'react';

const Word = ({ content, words, index, joinWords, isActiveIndex }) => {
  const letters = content.split('');

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
            maxWidth: `${content.length}ch`,
          }}
          className='words-input'
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
