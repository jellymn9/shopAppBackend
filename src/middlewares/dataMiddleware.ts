import { RegisterUserI } from "../types/reqDataTypes";
import { isEmpty } from "../utils/validators";

export function registerUserData(data: RegisterUserI) {
  if (isEmpty(data.email)) {
    throw new Error("Email is missing!");
  } else if (isEmpty(data.password)) {
    throw new Error("Password is missing!");
  } else if (isEmpty(data.username)) {
    throw new Error("Username is missing!");
  }
  return;
}
