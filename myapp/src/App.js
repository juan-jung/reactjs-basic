import { useState, useEffect } from "react";

function Hello() {
  useEffect(()=> {
   console.log("hi :)") 
   return () => console.log("bye :(") //cleanup function : component가 destroy될때 실행
  }, []);
  return <h1>Hello</h1>
}


function App() {
  const [showing, setShowing] =useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div className="App">
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
