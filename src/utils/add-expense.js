import { v4 as uuid } from "uuid";
import { fetchData } from "./data-fetch";
export const addExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: uuid(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};
