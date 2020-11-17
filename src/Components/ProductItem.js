import React from 'react'

import ReactDOM from 'react-dom';
import './CSS/ProductItem.css'
class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="container-fluid card col-xl-2 col-sm-4 col-md-3" style={{width: '100%',border:'1px solid black',marginLeft:'2.5%',display:'inline-block' ,marginTop:'40px',boxShadow:'1px 1px 4px 1px black'}}>
                <img className="card-img-top" src={this.props.product.link} alt="Card image" />
                <div className="card-body">
                    <h6 className="card-title">{this.props.product.name}</h6>
                    <div className="card-text">{this.props.product.price}</div>
                    <span><b style={{textDecoration:'line-through'}}>-30%</b></span>
                    <button type="button"style={{width: '100%'}} className="btn btn-success">Mua ngay</button>
                 </div>
             </div>
     
        );
    };
}
export default ProductItem;