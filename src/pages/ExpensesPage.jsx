import React from "react";
import { fetchData } from "../utils/data-fetch";
import { useLoaderData } from "react-router";
import { Table } from "../components/Table";
import { deleteItem } from "../utils/delete-item";
import { toast } from "react-toastify";
export const expensesLoader = () => {
    const expenses = fetchData("expenses");
    return {expenses};
}
export const expensesAction = async ({req}) => {
    const data = await req.formData();
    const {_action, ...values} = Object.fromEntries(data);
    if(_action==="deleteExpense"){
        try{
            deleteItem({
                key: "expenses",
                id: values.expenseId
            })
            return toast.success ("Expense deleted");
        }catch(err){
            console.log(err);
            throw new Error("There was a problem creating your expense");
        }
    }
}
export const ExpensesPage = () => {
    const {expenses} = useLoaderData();
    return(
        <div>
            <h1>All Expenses</h1>
            {
                expenses && expenses.length>0 ? (
                    <div>
                        <h2>Recent Expenses <small>({expenses.length})</small></h2>
                        <Table expenses={expenses}/>
                    </div>
                ): <h2>No expenses to show</h2>
            }
        </div>
    )
}