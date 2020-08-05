import React from 'react';
function CardItem(props){
    let item=props.item
  return(
    <div className="border border-aqua row p-3 mb-2 bg-light">  
     <img src={item.url} className="float-left mr-4 col-sm-3" height="150px" width="150px" alt={item.name}/>
    <div className="col">
    <h2>{item.name}</h2>
    <div>{item.description}</div>
    </div>
     
    </div> 
  )
}

export default CardItem
