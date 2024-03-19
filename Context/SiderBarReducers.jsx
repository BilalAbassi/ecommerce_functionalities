export const Filter_Reducer = (state, action) => {
  switch (action.type) {
    case "Filter_Sort":
      return {
        ...state,
        sort: action.payload,
      };
      break;
    case "Category_Filter":
      return {
        ...state,
        category: action.payload,
      };
      break;
    case "clear_sort":
      return {
        ...state,
        sort: null,
        category: null,
      };
      break;
    case "Price_Range":
      return {
        ...state,
        price_range: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
