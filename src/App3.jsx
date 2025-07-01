// 처음 만드는 component
// component : 함수
// component명(함수명) : UpperCamelCase

// jsx js+html
function MyAwesomeButton() {
  // 함수코드 들
  // js 주석
  /*
  js 주석
   */

  // return 에 : dom에 그려야할 코드를 작성
  return (
    <button
      style={{
        backgroundColor: "red",
        color: "yellow",
        padding: "15px",
        border: "2px solid yellow",
      }}
    >
      {/* jsx 주석 */}
      너무 잘 만든 버튼
    </button>
  );
}
function MyNewHeader() {
  return (
    <h2
      style={{
        color: "skyblue",
      }}
    >
      My New Header
    </h2>
  );
}

function App3() {
  return (
    <>
      <h1>Lorem ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur
        doloremque dolorum eligendi eos explicabo incidunt ipsa iusto minus
        molestiae natus neque nihil quae quia sapiente sed suscipit tenetur, ut?
      </p>
      <button>Lorem.</button>
      <button>Ab?</button>
      <hr />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yello",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yello",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <MyAwesomeButton />
      {/*  component  */}
      <MyNewHeader />
    </>
  );
}

export default App3;
