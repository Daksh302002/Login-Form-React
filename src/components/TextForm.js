import React from "react";

export default function TextForm(props) {
  const handleEvent = () => {
    alert("Your form has been submitted successfully");
  };
  return (
    <>
      <form>
        <div
          className="mb-3 my-3"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div
          className="mb-3 my-3"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label"
            for="exampleCheck1"
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Check me out
          </label>
        </div>
        <button
          type="submit"
          onClick={handleEvent}
          className={`btn btn-${props.mode}`}
          
        >
          Submit
        </button>
      </form>
    </>
  );
}
