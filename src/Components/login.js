import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            alertName:'',
            alertPassword:''
        }
    }
    clickLogin=()=>{
        let userName=document.getElementById('userName').value;
        let password=document.getElementById('password').value;
        if(userName!=='tuyentran'){
            this.setState({
                alertName:'Tên đăng nhập không tồn tại'});
        }
        else if(password!==12345678){
            this.setState({
                alertPassword:'Mật khẩu không chính xác'});
        }
    }
    render(){
        return(
            <div className="login">
                <form action="" className="form">
                     <h3 style={{marginTop:'20px',fontSize:'40px'}}>Đăng nhập</h3>
                    <div>
                        <input type="text" className="userName" id="userName" placeholder="Tên đăng nhập" name="userName" required/>
                        <div className="alertName">{this.state.alertName}</div>
                    </div>
                    <div>
                      
                        <input type="password" className="password" id="password" placeholder="Mật khẩu" name="password" required/>
                        <div className="alertPassword">{this.state.alertPassword}</div>
                    </div>
                    <div className="ckeck">
                        <label className="check-label">
                            <input className="check-input" type="checkbox" name="remember" required /> Nhớ mật khẩu.
                        </label>
                    </div>
                    <input className="btn-primary" style={{marginBottom:'30px',width:'80%',borderRadius:'3px'}} type="submit" value="Đăng nhập" onClick={this.clickLogin}></input> 
                </form>
            </div>
        );

    }
}
export default Login;