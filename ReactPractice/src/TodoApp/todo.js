export default function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      return {
        value: action.value,
        todos: state.todos,
      };
      break;

    default:
      break;
  }
}
