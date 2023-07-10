import React from "react";

const HomePageModal = ({ dataInArray }) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
View
</button> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Item Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {dataInArray && dataInArray.map((data,index)=>(
                 <div className="modal-body" key={data.id}>
                 <ol className="list-group list-group-numbered">
                   <li className="list-group-item">Item No : {index+1}</li>
                   <li className="list-group-item">Item Name : {data.todoItem}</li>
                 </ol>
               </div>
            ))}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageModal;
