import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HomePageModal from "./HomePageModal";

const HomePage = () => {
  const [dataInput, setDataInput] = useState("");
  const [dataInArray, setDataInArray] = useState([]);
  // const [vData, setVdata] = useState('');
  const [errorMsg, setErrorMsg] = useState("");

  const inputTodo = (e) => {
    setDataInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!dataInput || dataInput === "") {
      setErrorMsg("Please give a data to add *");
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    } else {
      const newData = {
        id: uuidv4(),
        todoItem: dataInput,
        status: "success",
      };
      setDataInArray([...dataInArray, newData]);
      setDataInput("");
    }
  };
  console.log("dataInArray-->", dataInArray);

  const delFunc = (del)=>{
    console.log('del-->',del);
    if(window.confirm('Do you want to delete ?')){
      const delItems = [...dataInArray].filter((arrayData)=>{
        console.log('arrayData-->',arrayData.id);
        return arrayData.id !== del ;
      })
      setDataInArray(delItems);
    }
  }

  return (
    <div className="container my-4">
      <h2>
        <span className="badge bg-secondary">My Todo App</span>
      </h2>
      <div className="container mt-4" style={{ width: "60%" }}>
        {errorMsg ? (
          <div
            className="alert alert-danger mb-3"
            role="alert"
            style={{ width: "40%", margin: "0 auto 0" }}
          >
            {errorMsg}
          </div>
        ) : (
          <></>
        )}
        <div className="card">
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Enter Item :
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={dataInput}
                onChange={inputTodo}
              />
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => handleSubmit()}
              >
                (+) Add
              </button>
            </div>
          </div>
          {dataInArray.length === 0 ? (<span>No todo item</span>):(
             <table className="table">
             <thead>
               <tr>
                 <th scope="col">No.</th>
                 <th scope="col">Todo Item</th>
                 <th scope="col">Actions</th>
               </tr>
             </thead>
           
           {dataInArray &&
             dataInArray.map((data, index) => (
               <tbody key={index}>
                 <tr>
                   <th scope="row">{index+1}.</th>
                   <td>{data.todoItem}</td>
                   <td>
                     <div
                       className="btn-group"
                       role="group"
                       aria-label="Basic mixed styles example"
                     >
                       <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                         View
                       </button>
                       <HomePageModal dataInArray={dataInArray}/>
                       <button type="button" className="btn btn-warning">
                         Edit
                       </button>
                       <button type="button" className="btn btn-danger"
                       onClick={()=>delFunc(data.id)}
                       >
                         Delete
                       </button>
                     </div>
                   </td>
                 </tr>
               </tbody>
             ))}
             </table>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default HomePage;
