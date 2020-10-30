import { instance, objectToQueryString } from "./axios";

const getCharacters = (values) => {
  const queryString = objectToQueryString(values);
  return instance.get(`character?${queryString}`);
};

const getCharacter = (id) => {
  return instance.get(`character/${id}`);
};

export { getCharacters, getCharacter };
