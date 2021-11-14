import React from 'react'
import {post} from 'axios'
import axios from 'axios'

class CustomerAdd extends React.Component{

    constructor(props)
    {
        super(props);
            this.state={
                // file:null,
                PriceRange:'',
                ToPrice:'',
                FromPrice:''
                // fileName:''
            }
        
    }
    handleFormSubmit=(e)=>{
        e.preventDefault()
        this.addCustomer()
        // .then((response)=>{
        //         console.log(response.data);
        // })
        // this.setState({
        //     PriceRange:'',
        //         ToPrice:'',
        //         FromPrice:''
        // })
        // window.location.reload();
    }

    // handleFileChange=(e)=>{
    //     this.setState({
    //         file:e.target.file[0],
    //         fileName:e.target.value
    //     })
    // }

    handleValueChange=(e)=>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(nextState);
        this.setState(nextState);
    }


    // addCustomer =()=>{
    //     const url = '/gift/tests';
    //     const formData = new FormData();
    //     // formData.append('image',this.state.file);
    //     formData.append('PriceRange',this.state.PriceRange);
    //     formData.append('ToPrice',this.state.ToPrice);
    //     formData.append('FromPrice',this.state.FromPrice);
    //     const config={
    //         headers:{
    //             'content-type':'multipart/form-data'
    //         }
    //     }
    //     console.log(this.state.PriceRange);
    //     console.log(formData);
    //     return post(url,formData,config);
    //     // return post(url,formData);

    // }

    addCustomer = async()=> {
        const url = '/gift/tests';
        axios.post(url, {
            PriceRange:this.state.PriceRange,
            ToPrice:this.state.ToPrice,
            FromPrice:this.state.FromPrice
        })
        .then(function (response) {
             // response  
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
        
    // async await 함수를 사용할 때, 
    
    try {
        const data = await axios.post("url");
    } catch {
        // 오류 발생시 실행
    }

    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>가격 추가</h1>
                가격범위: <input type="text" name="PriceRange" value={this.state.PriceRange} onChange={this.handleValueChange} /><br/>
                시작가격: <input type="text" name="ToPrice" value={this.state.ToPrice} onChange={this.handleValueChange} /><br/>
                끝가격: <input type="text" name="FromPrice" value={this.state.FromPrice} onChange={this.handleValueChange} /><br/>
                  {/* 가격범위: <input type="text" name="PriceRange"  onChange={this.handleValueChange} /><br/>
                시작가격: <input type="int" name="ToPrice"  onChange={this.handleValueChange} /><br/>
                끝가격: <input type="int" name="FromPrice"  onChange={this.handleValueChange} /><br/> */}
                <button type='submit'>추가하기</button>
                </form>
        )
    }


}

export default CustomerAdd;
//이미지 추가
{/* <input type='file' name='file' file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}></input> */}