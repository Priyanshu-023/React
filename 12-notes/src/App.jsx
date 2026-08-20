import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [note, setNote] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    let newNote =[...note];
    newNote.push({title,details});

    setNote(newNote);
    console.log(newNote);

    setTitle("");
    setDetails("");
  }

  const deleteNote=(idx)=>{
    const newNote = [...note];

    newNote.splice(idx,1);

    setNote(newNote);
  }


  return (
    <div className="h-screen w-screen flex flex-row bg-black text-white ">
      <div className="h-full w-1/2 p-30 ">
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <form 
          className="mt-10"
          onSubmit={(e)=>{
            submitHandler(e);
          }}
          >
          <div className="flex flex-col gap-10">
            <input
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value);
              }}  
              className="p-4 border-2 rounded-md text-2xl font-bold"
              type="text"
              placeholder="Enter Notes Heading"
            />
            <textarea
              value={details}
              onChange={(e)=>{
                setDetails(e.target.value);
              }}  
              className="h-40 border-2 p-4 text-2xl font-bold rounded-md"
              placeholder="Write Details" 
             />
             <button className="border-2 p-4 text-2xl font-bold rounded-md bg-white text-black"> Add Note </button>
          </div>
        </form>
      </div>

      <div className="h-full w-1/2 pt-30 flex flex-col ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex gap-10 mt-10 flex-wrap overflow-y-auto min-h-0 flex-1 ">
          {note.map((n, index) => (
            <div
              key={index}
              className="h-70 w-55 rounded-2xl pl-6 pr-3 pt-8 text-black overflow-y-auto bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')",
              }}
            >
              <div className="relative h-full flex flex-col">
                <h2 className="text-3xl font-bold wrap-break-word ">{n.title}</h2>
                <p className="mt-3.2 font-light wrap-break-word">{n.details}</p>
                <button
                  className=" h-10 w-40 mt-auto px-6 py-2 mb-4.5 bg-red-600 rounded-md text-white font-bold"
                  onClick={(index)=>{
                    deleteNote(index);
                  }}
                  >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;


{/* <div className="h-70 w-55 bg-amber-400 rounded-2xl"> </div> */}