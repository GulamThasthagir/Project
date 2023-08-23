// i was try but my logic is not working so i asked to chat gpt that gave the answer,first one is not my code 
// second one is my code


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [books, setBooks] = useState([]);

//   const addBook = () => {
//     setBooks([...books, { title, author, read: false }]);
//     setTitle("");
//     setAuthor("");
//   };

//   const deleteBook = (book) => {
//     if (window.confirm("Confirm Delete your Data")) {
//       const updatedBooks = books.filter((b) => b.title !== book.title);
//       setBooks(updatedBooks);
//     }
//   };

//   const markAsRead = (book) => {
//     alert("Read your book");
//     const updatedBooks = books.map((b) =>
//       b.title === book.title ? { ...b, read: true } : b
//     );
//     setBooks(updatedBooks);
//   };

//   return (
//     <div className="App">
//       <h1 className="books">BookList App</h1>
//       <div className="maincontainer">
//         <h2>Title</h2>
//         <input
//           type="text"
//           className="input"
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//           placeholder="Title..."
//         />
//         <h3>Author Name</h3>
//         <input
//           type="text"
//           className="input"
//           onChange={(e) => setAuthor(e.target.value)}
//           value={author}
//           placeholder="Author..."
//         />
//         <br />
//         <button className="add" onClick={addBook}>
//           Add
//         </button>
//       </div>
//       <div>
//         {books.map((book) => (
//           <div
//             className={`sub_div ${book.read ? "read" : ""}`}
//             key={book.title}
//           >
//             <h3>Title: {book.title}</h3>
//             <p>Author: {book.author}</p>
//             <div className="subSub_div">
//               <button onClick={() => deleteBook(book)}>Delete</button>
//               <button
//                 className={book.read ? "read-button" : ""}
//                 onClick={() => markAsRead(book)}
//               >
//                 {book.read ? "read" : "unread"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from "react";

function App() {
  const[title,setTitle]=useState("")
  const[author,setAuthor]=useState("")
  const[state,setState]=useState([])
  const[up,setUp]=useState(false)

 function submit(){
  setState([...state,{title,author}])
  setTitle("")
  setAuthor("")
 } 
 function deletes(value){
  alert("Confirm Delete ur Data")
    const deletess=state.filter((ele)=>ele.title !== value.title)
    setState(deletess)
 }
 
 function update(){
  alert("readed ur book")
  setUp(false)
 }

  return (
    <div className="App">
      <h1 className="books">BookList--App</h1>
      <div className="maincontainer">
      <h2>Title</h2>
      <input type="text" className="input" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Title...'></input>
      <h3>Author Name</h3>
      <input type="text" className="input" onChange={(e)=>setAuthor(e.target.value)} value={author} placeholder='Author...'></input><br></br>
      <button className="add" onClick={submit}>Add</button>
      </div>
      {<div>
        {state.map((value)=>{
          return(
            <>
            <div className='sub_div'>
            <h3>Title:{value.title}</h3>  
            <p>Authour:{value.author}</p>
            <div className='subSub_div'>
            <button onClick={()=>deletes(value)}>Delete</button>
            <button onClick={update} value={up?'Mark as read':"reded"}>Mark as read</button></div>
            </div>
            </>
          )
        })}
        </div>}
    </div>
  );
}

export default App;