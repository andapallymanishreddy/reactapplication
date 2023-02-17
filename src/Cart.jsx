import React from "react";
function Cart(props){
    function Totalprice(){
        return props.cart.reduce((t,pd)=>{
            return t+(pd.count*pd.price)
        },0)
    }
    return (
        <div className="border border-4 border-secondary ">
            Cart
            {
                props.cart.map(function(c){
                  return   <li className="d-flex flex-wrap justify-content-between" >
                    <div className="w-50">{c.title}</div>
                    <div className="w-25 text-end p-2" >{c.count}</div>
                    <div className="w-25 text-end p-2">{c.count*c.price}</div>
                </li>
                })
            }
            <hr />
            <h1 className="text-end">Total:{Totalprice()}</h1>
        </div>
    )
}
export default Cart