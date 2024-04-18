import './booknow.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
function Booknow(props) {
  var items = props.purchaseItem;
  console.log(items);
  const [members, setMembers] = React.useState(1);
  const [nights, setNights] = React.useState(1);
  const [plan, setPlan] = React.useState(1);
  const [totalPrice , settotalPrice] = React.useState(0);
  const [fullName , setfullName] = React.useState("");
  const [email , setEmail] = React.useState("");
  const [number , setnumber] = React.useState("");
  const [url , setUrl] = React.useState("");
  const [date , setDate] = React.useState("");

  const navigate = useNavigate();
  const handleMembersChange = (event) => {
    setMembers(event.target.value);
  };


  const handleNightsChange = (event) => {
    setNights(event.target.value);
  };

  const handleNameChange = (event) => {
    setfullName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setnumber(event.target.value);
    setPlan(items[0].title);
    setUrl(items[0].url);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  useEffect (() => {
    settotalPrice(items[0].price*members*nights);
  },[nights,members]);


const handleSubmit = async (e) => {
    e.preventDefault();
    let result = fetch('http://127.0.0.1:5000/booknow',{
      method: 'post',
      body:JSON.stringify({plan, members , nights , totalPrice , fullName , email , number , url , date}),
      headers:{'content-type': 'application/json'}
    })
    console.log(result);
    if(result)
      alert('Done!');
      navigate('/mybookings')
}



return(
    <>
  <div className='parent-booknow'>
  <br></br><br></br><br></br><br></br>
  <h1 style={{textAlign: 'center'}}>Book Now</h1>
  <div class="form-booknow">
  <div style={{padding: "20px"}}>
    <form class="vertical" >
      <label >Full Name: <input class="textbox" type="text" name="name" onChange={handleNameChange}/></label>
    </form>
    <form class="horizontal1">
      <label >&nbsp;&nbsp;Mobile Number:<input class="textbox" type="number" name="mobile" onChange={handleNumberChange} /></label>
      <label >&nbsp;&nbsp;Email: <input class="textbox" type="email" name="email" onChange={handleEmailChange} /></label>
      </form>
  
      {items.map((d,i)=>{
      return(
        <>
      <form class="horizontal2" >  
      <label >&nbsp;&nbsp;Package:<input class="textbox" type="text" value={d.title} name="package"></input></label>
      <label >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Members:<input class="number"  type="number" min="1" max="10" name="members" onChange={handleMembersChange}  /></label>
      <label >&nbsp;&nbsp;&nbsp;Total Nights:<input class="number" type="number" min="5" max="15" name="nights" onChange={handleNightsChange} /></label>
      <label >&nbsp;&nbsp;Date of Travel:<input class="date" type="date" name="package" onChange={handleDateChange} /></label>
      </form>
    
      <form class="vertical2">
      <label >Total Price:&nbsp;&nbsp;<input class="textbox" type="text" name="price" value={totalPrice} /></label>
      <br></br>
      <button className="button2booknow" onClick={handleSubmit}>Confirm Booking</button>
    </form>
    </>
        )
      }
      )} 
    </div> 
  </div>
  </div>
</>
)
    }
export default Booknow;

