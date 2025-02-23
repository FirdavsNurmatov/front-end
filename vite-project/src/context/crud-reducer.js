export const crudAction = {
  CREATE_USER: "CREATE_USER",
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER",
};

export const crudReducer = (state, action) => {
  switch (action.type) {
    case crudAction.CREATE_USER:
      return { ...state, usersList: [...state.usersList, action.value] };
    case crudAction.EDIT_USER:
      const newArr = state.usersList.map((item) =>
        item.id === action.value.id ? action.value : item
      );

      return { ...state, usersList: newArr };
    case crudAction.DELETE_USER:
      const filteredArr = state.usersList.filter((item) => {
        return item.id !== action.value.id;
      });

      return {
        ...state,
        usersList: filteredArr,
      };
    default:
      return state;
  }
};
