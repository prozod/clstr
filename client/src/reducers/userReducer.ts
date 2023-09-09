export const initialUserState = {
  user: null,
  starred: null,
};

export function userReducer(state, action) {
  switch (action.type) {
    case "instantiate": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "remove": {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      throw new Error("Something went wrong in the User Reducer.");
    }
  }
}
