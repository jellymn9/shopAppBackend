import { validate } from "validate.js";
import { validate as isValidUUID } from "uuid";

const constraints = {
  username: {
    presence: { allowEmpty: false },
    length: {
      minimum: 3,
      maximum: 10,
    },
  },
  email: {
    email: true,
    presence: { allowEmpty: false },
  },
  password: {
    length: {
      minimum: 5,
      maximum: 15,
    },
    presence: { allowEmpty: false },
  },
};

export const isInvalidEmail = function (email: string) {
  return validate({ email }, constraints);
};

export const isInvalidPassword = function (password: string) {
  return validate({ password }, constraints);
};

export const isInvalidUsername = function (username: string) {
  return validate({ username }, constraints);
};

export const isInvalidId = function (id: string) {
  return isValidUUID(id) ? undefined : { message: "Invalid id type!" };
};
