import React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router";
import { Button } from "react-bootstrap";

// 연습
// 각 버튼 클릭 시
function MyLayout() {
  const navigate = useNavigate();

  function handleSLASHClick() {
    navigate("/");
  }

  function handleQWEClick() {
    navigate("/qwe");
  }

  function handleASDClick() {
    navigate("/asd");
  }

  return (
    <div>
      <div>
        {/* / 로 이동*/}
        <Button onClick={() => navigate("/")} variant="outline-info">
          HOME
        </Button>

        {/* /qwe 로 이동*/}
        <Button onClick={() => navigate("/qwe")} variant="outline-info">
          QWE
        </Button>

        {/* /asd 로 이동*/}
        <Button onClick={() => navigate("asd")} variant="outline-info">
          ASD
        </Button>
      </div>
      <Button onClick={() => navigate(-1)} variant="outline-info">
        뒤로
      </Button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App51(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route
              index
              element={
                <div>
                  <h3>HOME</h3>
                </div>
              }
            />
            <Route
              path="qwe"
              element={
                <div>
                  <h3>QWE</h3>
                </div>
              }
            />
            <Route
              path="asd"
              element={
                <div>
                  <h3>ASD</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App51;
// import React from "react";
// import { BrowserRouter, Routes } from "react-router";
//
// // 각 버튼 클릭 시
//
// function MyLayout() {
//   return (
//     <div>
//       <div>
//         {/* / 로 이동 */}
//         <Button variant="outside-info">HOME</Button>
//         {/* /qwe 로 이동 */}
//         <Button variant="outside-info">QWE</Button>
//         {/* /asd 로 이동 */}
//         <Button variant="outside-info">ASD</Button>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// }
//
// function App51(props) {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" component={<MyLayout />}>
//             <Route index element={<Comp1 />} />
//             <Route
//               path="qwe"
//               element={
//                 <div>
//                   <h3>HOME</h3>
//                 </div>
//               }
//             />
//             <Route
//               path="asd"
//               element={
//                 <div>
//                   <h3></h3>
//                 </div>
//               }
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
//
// export default App51;
