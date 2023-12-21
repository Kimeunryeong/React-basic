import "./App.css";

//23.12.21 리액트 스타일
// function App() {
//   const name = '리액트';
//   // const style = {
//   //   // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성돕.
//   //   backgroundColor: 'black',
//   //   color: 'aqua',
//   //   fontSize: '48px', // font-size -> fontSize
//   //   fontWeight: 'bold',
//   //   padding: 16 //단위 생략시 px로 지정s
//   // };
//   // return <div style={style}>{name}</div>;
//   return (
//     <div style={{
//       backgroundColor: 'black',
//       color: 'aqua',
//       fontSize: '48px',
//       fontWeight: 'bold',
//       padding: 16
//     }}
//     >
//       {name}
//     </div>
//   )
// }
// export default App;
// function App() {
//   const name = '리액트';
//   return <div class="react">
//     {name}
//   </div>;
// }

// export default App;

// p75 (주석)

function App() {
  return (
    <>
      <nav className="header">
        <div>카카오톡</div>
        <ul>
          <li>카톡 안녕 가이드</li>
          <li>|</li>
          <li>카톡설명서</li>
          <li>|</li>
          <li>다운로드</li>
        </ul>
      </nav>
      <section id="content">
        <div class="main-text">
          <h1>이모티콘</h1>
          <p>우리들의 새로운 언어, 이모티콘!</p>
          <p>글자만으로는 내 감정을 표현하기</p>
          <p>어려운 순간들, 고민하지 말고 이모티콘을 이용해보세요!</p>
        </div>
        <div class="main-image">
          
        </div>
      </section>
    </>
  );
}

export default App;
