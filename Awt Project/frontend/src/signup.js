import  { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
function Signup() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
 const [email, setEmail] = useState('');
 const [pwd, setPwd] = useState('');
 const navigate = useNavigate();
 const handleSubmit = async (e) => {
  e.preventDefault();
  let result = fetch('http://127.0.0.1:5000/signup',{
    method: 'post',
    body:JSON.stringify({mobile, name, email, pwd}),
    headers:{'content-type': 'application/json'}
  })
  console.log(result);
  if(result){
    alert('Done!');
  navigate("/login");}
}
return(
    <>
    <div className='parent-signup'>
  <br></br><br></br><br></br><br></br>
  <h1>Signup</h1>
  <div class="signupform">
  <div class="div1">
    <form className='signup'>
      <label className='signup'>Full Name: <br></br><br></br><input class="textbox" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/></label>
      <label className='signup'>Mobile Number: <br></br><br></br><input class="textbox" type="number" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/></label>
      <label className='signup'>Email: <br></br><br></br><input type="email" class="textbox" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/></label>
      <label className='signup'>Password: <br></br><br></br><input type="password" class="textbox" name="password"value={pwd} onChange={(e) => setPwd(e.target.value)}/></label>
      <br></br>
      <button className='signup' type="submit" onClick={handleSubmit}>SIGNUP</button>
    </form> 
    </div> 
  </div>
  </div>
</>
)
}
export default Signup;