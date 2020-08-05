import React, { useState } from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
function AppShop(props){
    let [search,setsearch]=useState("israel")
  return(
    <div className="container">  
     <Header/>
     <Nav setsearch={setsearch}/>
     <Main search={search}/>
    </div> 
  )
}

export default AppShop
