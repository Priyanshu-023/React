import axios from "axios";
import Card from './components/Card'
import { useEffect, useState } from "react";


function App() {

  const [arr, setArr] = useState([]);
  const [idx, setIdx] = useState(1);

  const getData = async(idx)=>{
    const userData = await axios(`https://picsum.photos/v2/list?page=${idx}&limit=15`)
    console.log(userData.data);
    setArr(userData.data);
  }

  useEffect(()=>{
    getData(idx);
  },[idx])


  return (
    <div className="h-screen bg-black overflow-auto">
      <div className="flex flex-wrap gap-10 m-10">
        {arr.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Card author={elem.author} downloadUrl={elem.download_url} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-10">
        <button
          className="bg-amber-400 px-5 py-3 active:scale-95"
          onClick={() => {
            if (idx > 1) {
              setIdx(idx - 1);
            }
          }}
        >
          Prev
        </button>
        <h2 className="text-white pt-3 text-lg font-bold" >Page {idx}</h2>
        <button
          className="bg-amber-400 px-5 py-3 active:scale-95"
          onClick={() => {
            setIdx(idx + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
