import React,{useEffect,useState} from "react";
import Cart from "./Cart";
import axios from "axios";
function Products(){
    const [products,setproducts]=useState([])
    const [cart,setcart]=useState([]);
    useEffect(function(){
        axios.get("https://fakestoreapi.com/products").then(function(res){
            setproducts(res.data)
            console.log(res.data)
        })
    },[])
    function addtocart(p){
        setcart([...cart,{...p,count:1}])
    }
    function productincart(p){
        var x=cart.find(function(cp){
            if(cp.title===p.title){
                return true
            }
            else{
                return false
            }
        })
        return x;
    }
    function Getproductcount(p){
        var x=cart.find(function(cp){
            if(cp.title===p.title){
                return true
            }
            else{
                return false
            }
        })
        return x?x.count:0;
    }
    function incCount(p){
        const temp=cart.map(function(cp){
            if(cp.title===p.title){
                cp.count=cp.count+1
            }
            return cp;
        })
        setcart([...temp])
    }
    
    function decCount(p){
        const temp=cart.map(function(cp){
            if(cp.title===p.title){
                cp.count=cp.count-1   
            }
        
            return cp;
        }).filter((s)=>{
            return s.count!==0
        })
        setcart([...temp])
    }
    return (
        <div className="border border-4 border-info w-100 p-2 m-2 d-flex d  -wrap">
          
           <div className="w-50">
           <h1>Products</h1>
            {products.length>0 && (
                products.map(function(p){
                    return (
                        <li className="d-flex">
                        <img src={p.image} alt="" width='200px' />
                        <div className="p-4">
                        <h4>{p.title}</h4>
                        <h3>{p.price}</h3>
                        {
                            productincart(p) && (
                                <>                              
                                  <button className="btn btn-outline-secondary" onClick={()=>{decCount(p)}}>-</button >
                                 <b>{Getproductcount(p)}</b>
                                  <button className="btn btn-outline-secondary" onClick={()=>{incCount(p)}}>+</button >
                                </>

                            )
                        }
                        {
                            !productincart(p) && (<button className="btn btn-outline-success" onClick={()=>{addtocart(p)}}>Add to cart</button>)
                        }

                        </div>    
                        </li>
                    )
                })
            )}
           </div>
           <div className="w-50" >
           <Cart cart={cart}></Cart>
           </div>

        </div>
    )
}
export default Products