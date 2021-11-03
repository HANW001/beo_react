import React from "react";
import Login from "./Login";
import Landing from "./main_landing/Landing.js"
// import KaKaoLogin from 'react-kakao-login';

function App() {
  return (
    <div >
{/* <Login /> */}
<Landing />
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