import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import './App.css';
import Foodinput from "./components/Foodinput";
function App() { 
  let [fooditems,setFooditems]=useState([]);
  const handlekeydown=(event)=>{
   if(event.key ==="Enter"){
    console.log("enter");
    let newFoodItem = event.target.value;
    event.target.value="";
    let newItems=[...fooditems, newFoodItem];
    setFooditems(newItems);
   }
  };
  return (
  <>
  <Container>
    <h1 className="foodheading">Healthy Foods</h1>
    <Foodinput handlekeydown={handlekeydown}></Foodinput>
    <ErrorMessage items={fooditems}></ErrorMessage>
    <FoodItems items={fooditems}></FoodItems>
    </Container>
    {/*<Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container>*/}
    </>
    );
}

export default App;
