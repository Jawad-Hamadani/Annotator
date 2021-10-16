// MIT License
//
// Copyright 2021 Mohammad Jawad Moshati Hamadani
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
