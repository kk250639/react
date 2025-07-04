import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function MainLayout() {
  return (
    <div>
      <div>
        <div>NAVBAR</div>
        <div>
          <Link to="/abc">abc</Link>
        </div>
        <div>
          <Link to="/xyz">xyz</Link>
        </div>
        <div>
          <Link to="/qwe">qwe</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

function App50(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="abc"
              element={
                <div>
                  <h3></h3>
                </div>
              }
            />
            <Route
              path="xyz"
              element={
                <div>
                  <h3></h3>
                </div>
              }
            />
            <Route
              path="qwe"
              element={
                <div>
                  <h3></h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App50;
