import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import './App.css';
import app from "./Firebase/Firebase.init";


const auth = getAuth(app);






function App() {
  const [passwordError, setPasswordError] = useState('');


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!/(?=.*?[A-Z])/.test(password)) {
      setPasswordError('Please Provide at least one upperCase Character')
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password Should be 6 character')
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPasswordError('Please provide At least one special character')
      return;
    }
    setPasswordError('')

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error('error', error)
      })
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Your Email" required></input>
        <br></br>
        <input type="password" name="password" placeholder="Your Password" required></input>
        <br></br>
        <small><p>{passwordError}</p></small>
        <button type="submit">Register</button>

      </form>
    </div >
  );
}

export default App;
