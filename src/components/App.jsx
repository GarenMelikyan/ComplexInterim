import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();

  function updateFName(event) {
    const firstName = event.target.value;
    setfName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setlName(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input name="fName" onChange={updateFName} placeholder="First Name" />
        <input name="lName" onChange={updateLName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
