import React from "react";
import { CrudContextProvider } from "../context/crud-context";
import { UserCard } from "../components/user-card";

export const UserList = () => {
  const { data, dispatch } = React.useContext(CrudContextProvider);

  return (
    <div>
      {data?.usersList.length ? (
        <div>
          {data?.usersList?.map((item) => (
            <UserCard {...item} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-[red]">No data!</h1>
        </div>
      )}
    </div>
  );
};
