import authReducer from "@src/services/auth/auth.slice";
import addExtinguisherReducer from "@src/services/extinguishers/add-extinguisher.slice";

export default {
  auth: authReducer,
  addExtinguisher: addExtinguisherReducer,
};
