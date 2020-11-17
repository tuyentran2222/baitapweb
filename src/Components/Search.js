import {NavLink} from 'react-router-dom'
function Search(){
    return(
        <div style={{display:'inline-flex',backgroundColor:'#343A40',width:'100%',justifyContent:'center',paddingTop:'15px'}}>
            <p style={{color:'white',fontSize:'25px',marginLeft:'20px'}}>Shopee</p>
            <input type="text" style={{width:'50%',marginLeft:'10%'}} className="form-control form-control" placeholder="Search"></input>
            <span><button className="btn btn-primary">Search</button></span>
           
            <NavLink to="/login" activeClassName="is-active">Đăng nhập</NavLink>
        </div>
    );
 
};
export default Search;