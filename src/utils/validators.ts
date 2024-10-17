import { isString, validate } from "validate.js";
import { validate as isValidUUID } from "uuid";

const userConstraints = {
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

const productConstraints = {
  page: { numericality: { onlyInteger: true, greaterThan: 0 } },
  skipElements: { numericality: { onlyInteger: true } },
};

export const isInvalidEmail = function (email: string) {
  return validate({ email }, userConstraints);
};

export const isInvalidPassword = function (password: string) {
  return validate({ password }, userConstraints);
};

export const isInvalidUsername = function (username: string) {
  return validate({ username }, userConstraints);
};

export const isInvalidId = function (id: string) {
  return isValidUUID(id) ? undefined : { message: "Invalid id type!" };
};

export const isInvalidIsForward = function (isForward: string) {
  return isString(isForward)
    ? undefined
    : { message: "Invalid isForward type!" };
};

export const isInvalidPage = function (page: string) {
  return validate({ page }, productConstraints);
};

export const isInvalidSkip = function (skip: unknown) {
  if (skip instanceof Array) {
    return (
      (skip.length !== 2 && { message: "Invalid skip elements type" }) ||
      validate({ skipElements: skip[0] }, productConstraints) ||
      validate({ skipElements: skip[1] }, productConstraints)
    );
  } else {
    return { message: "Invalid skip type!" };
  }
};

export const isInvalidCursor = function (cursor: unknown) {
  if (typeof cursor === "string") {
    if (cursor) {
      return isValidUUID(cursor)
        ? undefined
        : { message: "Invalid cursor UUID value!" };
    }
    return undefined;
  } else {
    return { message: "Invalid cursor type!" };
  }
};
