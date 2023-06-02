import { fetchData } from "./data-fetch"

export const calculateBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc,expense)=>{
        if(expense.id!==budgetId.id) return acc;

        return acc+= expense.amount
    },0)
    return budgetSpent;
}