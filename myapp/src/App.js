import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time"); //state가 변화할때마다 실행됨
  useEffect(() => {
    console.log("i run only once.");
  }, []); //한번만 실행됨
  useEffect(()=> {
    if(keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes.");
    }
  }, [keyword]) //keyword가 변화할때마다 실행
  useEffect(()=> {
    console.log("i run when 'counter' changes.");
  }, [counter]) //counter가 변화할때마다 실행
  useEffect(()=> {
    console.log("i run when 'counter' or 'keyword' changes.");
  }, [counter,keyword]) //counter or keyword 둘 중 하나가 변화할때마다 실행
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Serach here..."
      />
      <h1> {counter} </h1> <button onClick={onClick}> click me </button>{" "}
    </div>
  );
}

export default App;
