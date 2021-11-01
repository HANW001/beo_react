// import React from "react";


// function App() {
//   return (
//     <div className="App">
//       <a href="http://172.30.1.42:5000/oauth"><img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" /> </a>
//     </div>
//   );
// }

import React from "react";
import KaKaoLogin from 'react-kakao-login';

// const token = "592b62707a03c5616e19cdbbf985a42b";

function App() {
  return (
    <div className="App">
      <h1>'KaKaoLogin'</h1>
      <a href="http://localhost:5000/oauth"><img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" /> </a>
    </div>
  );
}

// function KakaoLoginButton() {
//   return (
//     <div>
//       <KaKaoLogin
//         // rest api 키가 아닌 js 키를 사용해야 합니다.
//         jsKey={"592b62707a03c5616e19cdbbf985a42b"}
//         onSuccess={(res) => console.log(res)}
//         onFailure={(res) => console.log(res)}
        
//         // getPofile 속성을 주지 않으면 유저 정보를 받을 수 없습니다.
//         getProfile={true}
//       >
//       </KaKaoLogin>
//     </div>
//   );
// }

export default App;