import { fetchData } from "./data-fetch";
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (typeof id == "string" && id.length != 0) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }

  //   return localStorage.removeItem(key);
};
