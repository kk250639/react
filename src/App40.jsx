import React, { useState } from "react";

function MyComp1() {
  const [Url, setUrl] = useState("/boadr/list");
  let childComp = null;
  switch (url) {
    case "/board/list":
      childComp = (
        <div>
          <h3>게시물 목록</h3>
        </div>
      );
      break;
    case "/member/list":
      childComp = (
        <div>
          <h3>회원 목록</h3>
        </div>
      );
      break;
    case "/board/3":
      break;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button>이동</button>
      </div>
      <div>{/* 컴포넌트 */}childComp</div>
    </div>
  );
}

function App40(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App40;
