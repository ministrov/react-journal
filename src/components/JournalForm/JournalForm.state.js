export const INITIAL_STATE = {
  isValid: {
    post: true,
    title: true,
    date: true
  },
  values: {
    post: '',
    title: '',
    date: '',
    tag: ''
  },
  isFormReadyToSubmit: false
};

export function formReducer(state, action) {
  switch(action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        values: { ...state.values, ...action.payload }
      };
    case 'CLEAR':
      return {
        ...state,
        isValid: INITIAL_STATE.values
      };
    case 'RESET_VALIDITY':
      return {
        ...state,
        isValid: INITIAL_STATE.isValid
      };
    case 'SUBMIT': {
      const titleValidity = action.payload.title?.trim().length;
      const postValidity = action.payload.post?.trim().length;
      const dateValidity = action.payload.date;

      return {
        ...state,
        isValid: {
          post: postValidity,
          title: titleValidity,
          date: dateValidity
        },
        isFormReadyToSubmit: postValidity && titleValidity && dateValidity
      };
    }
  }
}