import React from "react";

function BoardList() {
  return (
    <div>
      <h3>게시판 목록</h3>
    </div>
  );
}

function MemberList() {
  return (
    <div>
      <h3>회원 목록</h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h3>어바웃 정보</h3>
    </div>
  );
}

function App41(props) {
  return (
    <div>
      <BrowerRouter>
        <Routes>
          <Route path="board/list" element={<BoardList />}></Route>
          <Route path="member/list" element={<MemberList />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowerRouter>
    </div>
  );
}

export default App41;
