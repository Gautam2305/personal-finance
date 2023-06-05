import React from "react";
import styles from "../components/Dashboard.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoaderData } from "react-router";
import { fetchData } from "../utils/data-fetch";
import { Home } from "../components/Home";
import { toast } from "react-toastify";
import { AddBudget } from "../components/AddBudget";
import { addBudget } from "../utils/add-budget";
import { AddExpense } from "../components/AddExpense";
import { addExpense } from "../utils/add-expense";
import { BudgetItem } from "../components/BudgetItem";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";
import { deleteItem } from "../utils/delete-item";
import styled from "styled-components";
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
        amount: values.amount,
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
    <>
      <div className={`${styles.dashboard}`}>
        {userName ? (
          <div>
            <h1 className={`${styles.userTitle}`}>Welcome {userName}</h1>
            {budgets && budgets.length > 0 ? (
              <div className={`${styles.carousel}`}>
                <div>
                  <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                      <AddBudget />
                      <Carousel.Caption />
                    </Carousel.Item>
                    <Carousel.Item>
                      <AddExpense budgets={budgets} />
                      <Carousel.Caption />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            ) : (
              <div>
                <p className={`${styles.desc}`}>
                  Create a budget to get started
                </p>

                <AddBudget />
              </div>
            )}
            <div>
              <h2>Existing Budgets</h2>
              

              <Row>
                {budgets?.map((budget) => (
                  <Card>
                    <BudgetItem key={budget.id} budget={budget} />
                    </Card>
                  ))}
              </Row>
            </div>
  
            {expenses && expenses?.length > 0 && (
              <Table
                expenses={expenses
                  .sort((a, b) => b.createdAt - a.createdAt)
                  .slice(0, 8)}
              />
            )}
            {expenses?.length > 8 && (
              <Link to="/expenses">View all expenses</Link>
            )}
          </div>
        ) : (
          <Home />
        )}
      </div>
    </>
  );
};

const Card = styled.div`
  border: 1px solid black;
  width: 270px;
  height: 270px;
  margin: 2rem 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background: linear-gradient(to right, #335cd7, #647dee);
  h2, h4{
    text-align: center;
    margin: 1rem 3.2rem;
  }
  progress{
      margin-left: 2rem;
      margin-top: 0.4rem;
      width: 75%;
      height: 20px;
  }
`

const Row = styled.div`
  display: flex;
  // flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
`
