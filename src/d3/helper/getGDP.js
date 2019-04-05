import { get } from "axios";

export const getGDP = () => {
  const url =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
  return get(url);
};
