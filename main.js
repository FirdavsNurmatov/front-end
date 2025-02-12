const form = document.querySelector(".form");
const input = document.querySelector(".input");
const box = document.querySelector(".box");
import { getLocalData, setData } from "./storage.js";

const render = (data) => {
  box.innerHTML = data
    ?.map(
      (item) =>
        `<div class="item">
            <h1>${item.title}</h1>
            <button id="${item.id}" class="edit__btn">edit</button>
            <button id="${item.id}" class="delete__btn">delete</button>
            <button id="${item.id}" class="save_data">save</button>
            </div>`
    )
    .join("");
};

// const getData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     users = [...data];
//     render(data);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// getData();  console.log(users);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let obj = {};

//   for (let i of inputs) {
//     obj[i.name] = i.value;
//     i.value = "";
//   }

//   users.push({ ...obj, id: Date.now() });
//   render();
// });

// box.addEventListener("click", (e) => {
//   if (e.target.className === "delete__btn") {
//     users = users.filter((item) => item.id != e.target.id);
//   } else if (e.target.className === "edit__btn") {
//     const userName = prompt("Name:");
//     const userLastName = prompt("Last name:");
//     users.map((item) => {
//       if (item.id == e.target.id) {
//         item.user_name = userName;
//         item.user_lastname = userLastName;
//       }
//     });
//   }
//   render();
// });

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3600/todos");
    const data = await res.json();

    render(data);
  } catch (error) {
    console.log("getdata");
  }
};

getData();

const getSingleData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3600/todos/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("getsingledata");
  }
};

const updateData = async (id, updatedData) => {
  try {
    const res = await fetch(`http://localhost:3600/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ title: updatedData }),
    });

    return res;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3600/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    console.log(error.message);
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3600/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ title: input.value }),
    });
    input.value = "";
    getData();
  } catch (error) {
    console.log("addeventlistener form");
  }
});

box.addEventListener("click", async (e) => {
  if (e.target.className === "save_data") {
    const data = await getSingleData(e.target.id);
    if (data) {
      const oldData = getLocalData("users") || [];

      const singleItem = oldData.find((item) => item.id == e.target.id);
      if (!singleItem) {
        setData("users", [...oldData, data]);
      }
    }
  } else if (e.target.className === "delete__btn") {
    const data = await getSingleData(e.target.id);
    if (data) {
      const oldData = getLocalData("users") || [];

      const newData = oldData.filter((item) => item.id != e.target.id);
      setData("users", [...newData]);

      await deleteData();
      getData();
    }
  } else if (e.target.className === "edit__btn") {
    const data = await getSingleData(e.target.id);
    if (data) {
      const oldData = await getLocalData(e.target.id);

      const newTitle = prompt("New title:");
      const res = await updateData(e.target.id, newTitle);

      const updatedData = oldData.map((item) => {
        if (item.id == e.target.id) {
          item.title = newTitle;
        }
      });
      setData("users", [...updatedData]);

      getData();
    }
  }
});
