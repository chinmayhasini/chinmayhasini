const initialState = {
    chartData: []
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_DATA":
        return {
          ...state,
          chartData: state.chartData,
        };
  
      
      default:
        return state;
    }
  };
  export default reducer;