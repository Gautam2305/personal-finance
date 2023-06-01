import { fetchData } from "./data-fetch";
export const getAllItems = ({category, key, value}) => {
    const data = fetchData(category) ?? [];
    return data.filter(item => item[key] === value);
}