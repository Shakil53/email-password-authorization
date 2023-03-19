import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import './App.css';
import app from "./Firebase/Firebase.init";


const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.error('error', error)
    })
}



function App() {
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Your Email"></input>
        <br></br>
        <input type="password" name="password" placeholder="Your Password"></input>
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div >
  );
}

export default App;
