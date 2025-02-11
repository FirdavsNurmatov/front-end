const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const box = document.querySelector(".box");

let users = [];

const render = () => {
  box.innerHTML = users
    .map(
      (item) =>
        `<div class="item">
            <h1>${item.user_name}</h1>
            <h1>${item.user_lastname}</h1>
            <button id="${item?.id}" class="edit__btn">edit</button>
            <button id="${item?.id}" class="delete__btn">delete</button>
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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {};

  for (let i of inputs) {
    obj[i.name] = i.value;
    i.value = "";
  }

  users.push({ ...obj, id: Date.now() });
  render();
});

box.addEventListener("click", (e) => {
  if (e.target.className === "delete__btn") {
    users = users.filter((item) => item.id != e.target.id);
  } else if (e.target.className === "edit__btn") {
    const userName = prompt("Name:");
    const userLastName = prompt("Last name:");
    users.map((item) => {
      if (item.id == e.target.id) {
        item.user_name = userName;
        item.user_lastname = userLastName;
      }
    });
  }
  render();
});
