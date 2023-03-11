import { getAuth } from "firebase/auth";
import './App.css';
import app from "./Firebase/Firebase.init";


const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}

const handleEmailChange = (event) => {
  console.log(event.target.value)
}
const handlePassword = (event) => {
  console.log(event.target.value)
}

function App() {
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input onBlur={handleEmailChange} type="email" name="email" placeholder="Your Email"></input>
        <br></br>
        <input onBlur={handlePassword} type="password" name="password" placeholder="Your Password"></input>
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div >
  );
}

export default App;
