import { toast } from "react-toastify";
import { deleteItem } from "../utils/delete-item"
import { getAllItems } from "../utils/get-all-items";
import { redirect } from "react-router";

export const deleteBudget = ({params}) => {
    try{
        deleteItem({
            key: "budgets",
            id: params.id,
        });

        const associatedExpenses = getAllItems({
            category: "expenses",
            key: "budgetId",
            value: params.id
        })
        associatedExpenses.forEach(expense => {
            deleteItem({
                key: "expenses",
                id: expense.id
            })
        })
        return toast.success("Budget deleted successfully!")
    }
    catch(err)
    {
        console.log(err);
    }
    return redirect("/");
}