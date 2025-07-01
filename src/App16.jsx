import { Alert, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function App16() {
  return (
    <>
      <button className="btn btn-primary">저장</button>
      <Button>등록</Button>
      <Button variant="warning">워닝</Button>
      <Button variant="danger">위험</Button>
      <Button>버튼</Button>
      <hr />
      {/* 연습 다양한 variant, size props 값으로 버튼을 만들어 보기 */}
      <Button variant="outline-dark" size="lg">
        다크라인
      </Button>
      <Button variant="link" size="sm">
        링크
      </Button>
      <Button variant="outline-success" size="undefined">
        성공
      </Button>
      <Alert variant="danger">위험 경고</Alert>
      <Alert variant="info">정보 알림</Alert>
      {/* 연습 : Alert 만들어보기 */}
      <Alert variant="success">성공 알림</Alert>
      {/* 연습 : Table component 사용해서 아래와 같은 table 만들어보기 */}
      {/*table.table.table-striped.table-bordered.table-hover>thead>tr>th*3>lorem1^^^tbody>tr*3>td*3>lorem1*/}
      <Table striped={true} bordered={true} hover={true}>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Quaerat.</th>
            <th>Iure?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Temporibus.</td>
            <td>Quibusdam!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Fugit.</td>
            <td>Unde.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Quidem.</td>
            <td>Dicta!</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Modi!</td>
            <td>Hic.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Architecto.</td>
            <td>Et?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Quasi?</td>
            <td>Quia!</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Optio.</td>
            <td>Ex!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Fugiat.</td>
            <td>Animi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Tempore.</td>
            <td>Nobis.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default App16;
