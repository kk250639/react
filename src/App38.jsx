import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";

function MyComp1({value}) {
  return <div className="boder">value *2 : {value * 2}</div>;
}

MyComp1.propTypes = {value: PropTypes.number};

let someValue = 1;

function MyComp2() {
  someValue = someValue + 1;
  return <div className="border bg-light">someValue : {someValue - 1}</div>;
}

function MyComp3() {
  useEffect(() => {
    // 마운트 될 떄 실행 코드
    console.log("comp3 마운트됨");

    return () => {
      // 언마운트 될 떄 실행 코드
      console.log("comp3 언마운트됨");
    };
  }, []);
  return (
    <div>
      <h3>mycomp 3</h3>
    </div>
  );
}

function Child41() {
  useEffect(() => {
    console.log("child41 mounted")
    return () => {
      console.log("child4 unmounted")
    }
  }, []);
  return (
    <div>
      <h3>child41 component</h3>
    </div>
  )
}

function MyComp4() {
  const [show, setShow] = useState()
  return (
    <div>
      <FormCheck type="switch" checked={show} onClick={() => setShow(!show)}/>
      {show && <Child41/>}
    </div>
  )


  function App38(props) {
    // strict mode : 모든 컴포넌트를 마운트, 언마운트, 마운트
    // pure component : 함수(컴포넌트) 밖의 데이터를 변경하지 말 것
    return (
      <div>
        <MyComp4/>
        <hr/>
        <MyComp3/>
        <hr/>
        <MyComp2/>
        <MyComp2/>
        <MyComp2/>
        <hr/>
        <MyComp1 value={1}/>
        <MyComp1 value={2}/>
      </div>
    );
  }

  export default App38;
