import React,{useEffect,useState} from 'react';
import CardItem from './cardItem';
import { doApiGet } from '../services/services/apiService';
function Main(props){
    let [prods,setProds]=useState([])
    let [temp_ar,setTemp_ar]=useState([])
    useEffect(()=>{
        let url="http://localhost:3000/products"
        doApiGet(url)
        .then(data=>{
            setProds(data)
            setTemp_ar(data)
        })
    },[])
    useEffect(()=>{
        prods=temp_ar
        console.log(prods); 
       let temp=[]
       prods.map(item=>{
           if(item.name.includes(props.search)||item.description.includes(props.search)){
               temp.push(item)
           }
       })
       console.log(temp);
       setProds(temp)
    },[props.search])
  return(
    <main className="container mt-3" >  
    {(prods.length>0)?
     prods.map(item=>{
         return(
             <CardItem key={item.id} item={item}/>
         )
     }):"not found"}
    </main> 
  )
}

export default Main
