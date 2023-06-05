import React from "react";
import { getAllItems } from "../utils/get-all-items";
import { useLoaderData } from "react-router";
import { BudgetItem } from "../components/BudgetItem";
import { AddExpense } from "../components/AddExpense";
import { Table } from "../components/Table";
import { deleteItem } from "../utils/delete-item";
import { toast } from "react-toastify";
import { addExpense } from "../utils/add-expense";
import styled from "styled-components";
export const budgetLoader = async ({ params }) => {
  const budget = await getAllItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await getAllItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("the budget you are trying to find doesn't exist");
  }
  return { budget, expenses };
};
export const budgetAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
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

export const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  return (
    <div>
      <h1>{budget.name} Overview</h1>
      <Card>
        <BudgetItem budget={budget} />
      </Card>
      <AddExpense budgets={[budget]} />
      <div>
        {expenses && expenses.length > 0 && (
          <div>
            <h2>{budget.name} Expenses</h2>
            <Table expenses={expenses} showBudget={false} />
          </div>
        )}
      </div>
    </div>
  );
};

const Card = styled.div`
  width: 400px;
  height: 280px;
  margin: 1rem 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  h2,
  h4 {
    text-align: center;
    margin-top: 1rem;
    // color: white;
  }
  progress {
    margin-left: 3.9rem;
    margin-top: 2rem;
    width: 70%;
    height: 20px;
  }
  // background: #335CD7;
  // background: linear-gradient(to right, #2193b0, #6dd5ed)
  background: linear-gradient(to right, #335cd7, #647dee);
`;
