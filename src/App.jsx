import React, { useState } from "react";
import { request } from "./config/request";
import { Users } from "./components/users";

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (input) {
      setInput("");
      request.post("/todos", { title: input }).then((res) => {});
    }
  };

  React.useEffect(() => {});

  React.useEffect(() => {
    request.get("/todos").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <div className=" max-w-[1200px] mr-auto ml-auto">
        <div className=" mb-7 mt-7 mr-2">
          <input
            type="text"
            className=" border-2"
            name="title"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={addUser}
            className="add border-2 ml-2 p-1 cursor-pointer"
          >
            add
          </button>
        </div>
        {users?.map((item) => (
          <Users id={item.id} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default App;
