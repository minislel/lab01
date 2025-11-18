function TableDataReducer(state, action) {
  const { originalData } = state;

  switch (action.type) {
    case "SORT_USER_ASC":
      return {
        ...state,
        sortedData: [...originalData].sort((a, b) => {
          const nameA = a.user ? a.user.name : "";
          const nameB = b.user ? b.user.name : "";
          return nameA.localeCompare(nameB);
        }),
      };

    case "SORT_USER_DESC":
      return {
        ...state,
        sortedData: [...originalData].sort((a, b) => {
          const nameA = a.user ? a.user.name : "";
          const nameB = b.user ? b.user.name : "";
          return nameB.localeCompare(nameA);
        }),
      };

    case "SORT_USER_NATURAL":
      return {
        ...state,
        sortedData: [...originalData],
      };

    case "SORT_TITLE_ASC":
      return {
        ...state,
        sortedData: [...originalData].sort((a, b) => {
          return a.post.title.localeCompare(b.post.title);
        }),
      };

    case "SORT_TITLE_DESC":
      return {
        ...state,
        sortedData: [...originalData].sort((a, b) => {
          return b.post.title.localeCompare(a.post.title);
        }),
      };

    case "SORT_TITLE_NATURAL":
      return {
        ...state,
        sortedData: [...originalData],
      };

    case "SORT_COMMENTS_ASC":
      return {
        ...state,
        sortedData: [...originalData].sort((a, b) => {
          return a.comments.length - b.comments.length;
        }),
      };

    case "SORT_COMMENTS_DESC":
      return {
        ...state,
        sortedData: [...originalData].sort((a, b) => {
          return b.comments.length - a.comments.length;
        }),
      };

    case "SORT_COMMENTS_NATURAL":
      return {
        ...state,
        sortedData: [...originalData],
      };

    case "SET_ORIGINAL_DATA":
      return {
        originalData: action.data,
        sortedData: action.data,
      };

    default:
      return state;
  }
}

export default TableDataReducer;
