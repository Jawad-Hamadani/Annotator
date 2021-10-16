import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/utilities/SearchBar";
import { Button } from "@material-ui/core";
import Sentences from "./components/utilities/Sentences";
import { SentencesProvider } from "./contexts/SentencesContext";
import SelectGroupSelection2 from "./components/utilities/SelectGroupSelection2";
import { TokenProvider } from "./contexts/TokenContext";
import Segmentation from "./components/layout/Segmentation";
import { HistoryProvider } from "./contexts/HistoryContext";
import { DataProvider } from "./contexts/DataContext";
function App() {
  return (
    <SentencesProvider>
      <TokenProvider>
        <HistoryProvider>
          <DataProvider>
            <div className="App">
              <Navbar />
              <div className="container">
                <div className="main-work-space">
                  <Segmentation />
                </div>
                <div className="sidebars">
                  <h1>Sentences</h1>
                  <p>Here are the sentences which should be annotated.</p>
                  <SearchBar button="Filter by Search" label="Sentences" />
                  <SelectGroupSelection2 />
                  <div>
                    <Button
                      size="large"
                      style={{
                        marginTop: "10px",
                        marginBottom: "30px",
                        minWidth: "192.2px",
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Filter By Flag
                    </Button>
                  </div>
                  <Sentences />
                </div>
              </div>
            </div>
          </DataProvider>
        </HistoryProvider>
      </TokenProvider>
    </SentencesProvider>
  );
}

export default App;
