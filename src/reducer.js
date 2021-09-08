import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((el) => el.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) => {
        return bug.id !== action.payload.id ? bug : { ...bug, resolved: true };
      });

    default:
      return state;
  }
}
