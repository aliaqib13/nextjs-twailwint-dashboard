const initialState = {
  isLogin: true,
  token: null,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle actions here
    default:
      return state;
  }
};

export default authReducer;
