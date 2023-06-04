import React from "react";
import styles from "../components/Dashboard.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoaderData } from "react-router";
import { fetchData } from "../utils/data-fetch";
import { Home } from "../components/Home";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AddBudget } from "../components/AddBudget";
import { addBudget } from "../utils/add-budget";
import { AddExpense } from "../components/AddExpense";
import { addExpense } from "../utils/add-expense";
import { BudgetItem } from "../components/BudgetItem";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";
import { deleteItem } from "../utils/delete-item";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
};
export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch (err) {
      console.log(err);
      throw new Error("Account could not be created");
    }
  }
  if (_action === "addBudget") {
    try {
      addBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("budget created!");
    } catch (err) {
      throw new Error("There was a problem creating your budget");
    }
  }
  if (_action === "createExpense") {
    console.log(values);
    try {
      addExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`${values.newExpense} created`);
    } catch (err) {
      console.log(err);
      throw new Error("There was a problem creating your expense");
    }
  }
  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted");
    } catch (err) {
      console.log(err);
      throw new Error("There was a problem creating your expense");
    }
  }
};
export const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
  // console.log(budgets);
  return (
    
      <div className={`${styles.dashboard}`}>
        {userName ? (
        <div>
            <h1>Welcome {userName}</h1>
            {(budgets && budgets.length > 0) ?
            (<div>
                <AddBudget/>
                <AddExpense budgets={budgets}/>
            </div>) 
            :
            (<div>
                <p>personal budgeting is the GOAT </p>
                create a budget to get started !
                huhu
                <AddBudget/>
            </div>)}
            <div>
                <h2>Existing Budgets</h2>
                <div>
                    {budgets?.map(budget => (
                        <BudgetItem key={budget.id} budget={budget}/>
                    ))}
                </div>
            </div>
            {
                expenses && expenses?.length> 0 && (
                    <Table expenses={expenses.sort((a,b) => b.createdAt - a.createdAt).slice(0,8)} />
                    
            
            )}
            {expenses?.length > 8 && (
              <Link to="/expenses">View all expenses</Link>
            )}
        </div>
        ) : <Home/>}
      </div>
    )
}