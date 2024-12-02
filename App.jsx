import React, {useState} from "react";
// import  "./App"
// import FoodItems from "./Components/FoodItems";
import "./App.css";
// import FoodItems from './components/FoodItems';
// import ErrorMessage from './components/ErrorMessage';
import Student from "./Student";

function App() {
  const[name,setName]= useState("waris");
  return (
    <>
      <h1> Student list</h1>

      <Student
        name={name}
        email="waris456@gamil.com"
        Mobile="43456"
        other={{ adress: "panjabi tola", city: "kanpur" }}
      ></Student>
      <button onClick={()=>{setName(" Waris qureshi")}}>UBDATE Name</button>
      <Student
        name={"amir"}
        email="amir456@gamil.com"
        Mobile="43434556"
        other={{ adress: "panjabi tola", city: "lucknow" }}
      ></Student>
      <Student
        name={"salam"}
        email="saalm456@gamil.com"
        Mobile="43434355"
        other={{ adress: "panjabi tola", city: "unnao" }}
      ></Student>
    </>
  );
  // let foodItems = ['dal','roti','rice','paneer','ghee'];
  // return (
  //   <>
  //     <h1>heathee food</h1>
  //     <ErrorMessage Items={foodItems}></ErrorMessage>
  //    <FoodItems Items={foodItems}></FoodItems>
  //   </>
  // );
}
export default App;
