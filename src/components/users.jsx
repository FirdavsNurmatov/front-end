// import {prevent}

export const Users = ({ id, title }) => {
  const click = (e) => {
    e.preventDefault();
    console.log(e, "ok");
  };

  return (
    <div className=" border-1 p-6">
      <h1 key={id} className="">
        {title}
      </h1>
      <button
        id={id}
        className="delete__btn mr-2 border-2 border-red-500 cursor-pointer"
        onSubmit={click}
      >
        delete
      </button>
      <button
        id={id}
        className="edit__btn mr-2 border-2 border-red-500 cursor-pointer"
        onSubmit={click}
      >
        edit
      </button>
    </div>
  );
};
