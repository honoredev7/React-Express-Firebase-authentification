import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import Tasks from './components/Tasks';

function App() {

  const [auth, setAuth] = React.useState(false || window.localStorage.getItem('auth') === true);
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(userCredentials => {
      if(userCredentials) setAuth(true);
      
      window.localStorage.setItem('auth', true);
      userCredentials.getIdToken().then(token => setToken(token))
    })
  }, []);

  const handleClick = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(userCredentials => {
      if(userCredentials) setAuth(true);
    });
  }
  return (
    <div className="App">
      { auth ? <Tasks token={token} /> : <button onClick={handleClick}>Login with Google</button> }
    </div>
  );
}

export default App;
