import React from "react";


class Login extends React.Component{
    goToLand=()=>{
this.props.history.push('./main_landing/landing')
    };

state ={
  count : 0
};

onLogin =(res)=>{
    console.log('login')
    console.log(res)
    
    };

add = () => {
  console.log("add");
  this.setState({count: this.state.count +1})
};

minus = () => {
  console.log("minus");
  this.setState(current => ({count: current.count -1}))
};

  render(){
    return   <div className="App">
    <h1>Count : {this.state.count}</h1>
    <button onClick={this.add}>add</button>
    <button onClick={this.minus}>minus</button>
    <a onClick={this.goToLand} href="http://localhost:5000/oauth"><img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" /> </a>
  </div>
  }

}

export default Login;