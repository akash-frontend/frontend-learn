import { useState } from 'react'
import './App.css'
import Header from "./header";
import useLocalStorage from "./useLocalStorage";


function App() {

    // Custom hook
    const [username, setUsername] = useLocalStorage("username", "");
    const [showHeader, setShowHeader] = useState(false);


    function submitForm(e) {
        e.preventDefault();
        setShowHeader((prev) => !prev);
      }



    const element = (
        <>
              {showHeader && <Header />}
          <main className="App">
          <form action="" onSubmit={submitForm}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </fieldset>
          <button type="submit">Login</button>
        </form> 
          </main>
        </>
      );
      return element;
}

export default App
