import { RECEIVE_API_DATA } from "../sagaActions/actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
