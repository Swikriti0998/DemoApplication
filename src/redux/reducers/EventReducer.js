const initialState={
    details:{}
  }
  
  export const EventReducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'ADD_DATA':
            return{
                ...state,
                details:{
                    ...state.details,
                    ...action.payload
                }
            };
        default:
            return state;
    }
  }