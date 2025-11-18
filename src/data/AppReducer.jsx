function AppReducer(state, action) {
  switch (action.type) {
    case "check":
      return state.map((person) =>
        person.id === action.id
          ? { ...person, isChecked: !person.isChecked }
          : person
      );

    case "rate":
      return state.map((person) =>
        person.id === action.id ? { ...person, rating: action.rating } : person
      );

    case "delete":
      return state.filter((person) => person.id !== action.id);

    case "add":
      const newId =
        state.length > 0 ? Math.max(...state.map((p) => p.id)) + 1 : 1;
      return [
        ...state,
        {
          id: newId,
          name: action.name,
          email: action.email,
          url: action.url,
          photo: action.photo,
          rating: 0,
          isChecked: false,
        },
      ];

    case "edit":
      return state.map((person) =>
        person.id === action.id
          ? {
              ...person,
              name: action.name,
              email: action.email,
              url: action.url,
              photo: action.photo,
            }
          : person
      );

    default:
      return state;
  }
}
export default AppReducer;
