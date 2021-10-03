import Navbar from './components/layout/Navbar';
import SearchBar from './components/utilities/SearchBar';
import SelectGroup from './components/utilities/SelectGroup';
import { Button } from '@material-ui/core';
import { useContext } from 'react';
import ButtonGroup from './components/utilities/ButtonGroup';
import Sentences from './components/Sentences';
import Token from './components/token/Token';
import MainInput from './components/MainInput';
import SegmentedDiv from './components/SegmentedDiv';
import { SentencesProvider } from './contexts/SentencesContext';
import SelectGroupCollection1 from './components/utilities/SelectGroupCollection1';
import SelectGroupSelection2 from './components/utilities/SelectGroupSelection2';
import { TokenProvider } from './contexts/TokenContext';
function App() {
  return (
    <SentencesProvider>
      <TokenProvider>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <div className='sidebars'>
            <h1>Search Field</h1>
            <p>Examples from other treebanks to help you tag.</p>
            <SearchBar button='Search' label='Examples' />
            <SelectGroupCollection1 />
          </div>
          <div className='main-work-space'>
             <MainInput />      
             <SegmentedDiv />         
            <div className='search'></div>
            <ButtonGroup />
          </div>
          <div className='sidebars'>
            <h1>Sentences</h1>
            <p>Here are the sentences which should be annotated.</p>
            <SearchBar button='Filter by Search' label='Sentences' />

            <SelectGroupSelection2 />
            <div>
              <Button
                size='large'
                style={{
                  marginTop: '10px',
                  marginBottom: '30px',
                  minWidth: '192.2px',
                }}
                variant='contained'
                color='primary'
              >
                Filter By Flag
              </Button>
            </div>
            <Sentences />
          </div>
        </div>
      </div>
      </TokenProvider>
    </SentencesProvider>
  );
}

export default App;
