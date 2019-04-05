import { get } from "axios";

const transformToObject = data =>
  data.map(item => ({
    recordDate: item[0],
    gdp: item[1],
    year: new Date(item[0]).getFullYear()
  }));

export const getGDP = async () => {
  const url =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
  const {
    data: { data }
  } = await get(url);
  return transformToObject(data);
};
