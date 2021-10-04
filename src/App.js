import Navbar from './components/layout/Navbar';
import SearchBar from './components/utilities/SearchBar';
import { Button } from '@material-ui/core';
import ButtonGroup from './components/utilities/ButtonGroup';
import Sentences from './components/utilities/Sentences';
import { SentencesProvider } from './contexts/SentencesContext';
import SelectGroupCollection1 from './components/utilities/SelectGroupCollection1';
import SelectGroupSelection2 from './components/utilities/SelectGroupSelection2';
import { TokenProvider } from './contexts/TokenContext';
import Segmentation from './components/layout/Segmentation';
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
            <Segmentation />       
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
