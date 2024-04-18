import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
function Login() {
 const [email, setEmail] = useState('');
 const [pwd, setPwd] = useState('');
 const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      body: JSON.stringify({ email, pwd }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      console.log('Login successful:', data);
      alert('Login successful!');
      navigate('/home')
    } else {
      const errorMessage = await response.text();
      console.error('Login failed:', errorMessage);
      alert('Login failed. Please check your email and password.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while logging in. Please try again later.');
  }
};


return(
    <>
    <div className='parent-login'>
    <br></br><br></br><br></br><br></br>
  <h1>Login</h1>
    <div class="form-login">
    <div style={{padding: "20px"}}>
    <form className='login' onSubmit={handleSubmit}>
      <label className='login'>Email: <br></br><br></br><input type="email" name="email" class="textbox" value={email} onChange={(e) => setEmail(e.target.value)}/></label>
      <label className='login2'>Password: <br></br><br></br><input type="password" name="password" value={pwd} onChange={(e) => setPwd(e.target.value)} class="textbox"/></label>
      <label className='login3'>
        <input type="checkbox" class="chkbox-login" name="robot"/> I'm not a robot
      </label>
      <label className='login3'>
        <input type="checkbox" name="terms" class="chkbox-login"/> I agree to Terms and conditions
      </label>
      <button className='login' type="submit">LOGIN</button>
    </form>  
  </div>
</div>
</div>
</>
)
}
export default Login;