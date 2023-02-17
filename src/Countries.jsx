import React,{useState, useEffect} from "react";
import axios from "axios";
function Countries(){
    var [countries,setcountries]=useState([]);
    useEffect(function(){
        axios.get("https://restcountries.com/v2/all").then(function(res){
            setcountries(res.data)
            console.log(res.data)
        })
    },[])
    function asc(){
        countries.name.sort(function(a,b){
            var f1=a.name.toLowercase();
            var f2=b.name.toLowercase();
            if(f1<f2){
                return -1
            }
            else if(f1>f2){
                return 1
            }
            else{
                return 0
            }
    
        })
        
    }
    return (
        <div>
            <div> Sort by population: <button onClick={asc}>Ascending</button> <i>Decending</i></div>
            {
                countries.map(function(c){

                    return   (
                        <div style={{display:'inline-block'}}  className="p-2 m-2">
                            <div  style={{width:'200px', display:'inline-block'}} >
                            <h6><i>{c.name}</i></h6>
                           <img src={c.flag} alt="" style={{width:'200px'}} />
                           <h6 className="text-end">Population:{c.population}</h6>
                            </div>
                           </div>
                    )
                   
                })
            }
        </div>
    )
}
export default Countries