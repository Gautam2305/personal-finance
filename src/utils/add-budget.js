import { v4 as uuid } from "uuid";
import { fetchData } from "./data-fetch";
export const addBudget = ({ name, amount }) => {
  const newItem = {
    id: uuid(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};
