import logo from './logo.svg';
import './App.css';

import Amplify, { Auth } from 'aws-amplify'

function App() {
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("User: ", user);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() =>
          Auth.federatedSignIn({ provider: "Facebook" })}>Sign in with Facebook</button>
        <button onClick={() =>
          Auth.federatedSignIn()}>Sign in</button>
        <button onClick={checkUser}>Check User</button>
      </header>
    </div>
  );
}
export default App;