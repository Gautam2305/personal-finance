import React from "react";
import { getAllItems } from "../utils/get-all-items";
import { useLoaderData } from "react-router";
import { BudgetItem } from "../components/BudgetItem";
import { AddExpense } from "../components/AddExpense";
import { Table } from "../components/Table";
import { deleteItem } from "../utils/delete-item";
import { toast } from "react-toastify";
import { addExpense } from "../utils/add-expense";
export const budgetLoader = async({params}) => {
    const budget = await getAllItems({
        category: "budgets",
        key: "id",
        value: params.id
    })[0];

    const expenses = await getAllItems({
        category: "expenses",
        key: "budgetId",
        value: params.id
    });

    if(!budget){
        throw new Error("the budget you are trying to find doesn't exist")
    }
    return { budget,expenses };
}
export const budgetAction = async ({req}) => {
    const data = await req.formData();
    const {_action, ...values} = Object.fromEntries(data);
    if (_action === "createExpense") {
        try {
          addExpense({
            name: values.newExpense,
            amount: values.newExpenseAmount,
            budgetId: values.newExpenseBudget,
          });
          return toast.success(`Expense ${values.newExpense} created!`);
        } catch (e) {
          throw new Error("There was a problem creating your expense.");
        }
      }
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

export const BudgetPage = () => {
    const { budget,expenses } = useLoaderData();
    return(
        <div>
            <h1>{budget.name} Overview</h1>
            <div>
                <BudgetItem budget={budget}/>
                <AddExpense budgets={[budget]}/>
            </div>
            <div>
            {
                expenses && expenses.length >0 && (
                    <div>
                    <h2>{budget.name} Expenses</h2>
                    <Table expenses={expenses} showBudget={false} />
                    </div>
                )
            }
            </div>
        </div>
    )
}