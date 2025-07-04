import React, { useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  Link,
} from "react-router";
import "./assets/mystyle.css";
// 연습 : 아래 경로에 같은 sidebar가 존재하도록 코드 작성
// /react/install
// /react/game
// /react/state

function ReactLayout() {
  useEffect(() => {
    //
    console.log("마운트 때 실행 코드");

    return () => {
      console.log("언마운트 때 실행되는 코드");
    };
  }, []);

  return (
    <div className="d-flex gap-3">
      <div className="w-25 bg-body-tertiary p-1">
        <div>React</div>
        <div>
          <NavLink to="/react/install">Install</NavLink>
        </div>
        <div>
          <NavLink to="/react/game">Game</NavLink>
        </div>
        <div>
          <NavLink to="/react/state">State</NavLink>
        </div>
      </div>
      <div className="flex-grow-1 bg-primary-subtle">
        <Outlet />
      </div>
    </div>
  );
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactLayout />}>
            <Route
              path="install"
              element={
                <div>
                  <h3>Install</h3>
                </div>
              }
            />
            <Route
              path="game"
              element={
                <div>
                  <h3>Game</h3>
                </div>
              }
            />
            <Route
              path="state"
              element={
                <div>
                  <h3>State</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;
