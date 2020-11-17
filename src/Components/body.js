import React from 'react'
import ProductItem from './ProductItem'
import Carousel1 from './Carousel1'
import products from '../Mock/products'
class Body extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            list:products
        };
    }
    render(){
      const list=this.state.list;
        console.log(list);
        const elmProduct=list.map((product,index)=>{
            return <ProductItem key={index} product={product}/>
        })
        return (
            <div className="body" style={{width: '100%',marginTop:'35px',backgroundColor:'#A4A6A9',paddingBottom:'15px'}}>
                 <Carousel1/>
                 <h2 style={{marginTop:'30px',fontSize:'35px'}}>Bán chạy nhất</h2>
                 <div className="listProduct" >
                     {elmProduct}
                  
                </div>
            </div>
           

        );
    }
}
export default Body;