import React from "react";
import { formatCurrency } from "../utils/format-currency";
import { getAllItems } from "../utils/get-all-items";
import { Link, useFetcher } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import styled from "styled-components";

export const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();

  const formatDateToLocaleString = (epoch) =>
    new Date(epoch).toLocaleDateString();

  const budget = getAllItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td> {expense.name} </td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createAt)}</td>
      {showBudget && (
        <td>
            <fetcher.Form method="post">
                <input type="hidden" name="_action" value="deleteExpense" />
                <input type="hidden" name="expenseId" value={expense.id} />
                <Button type="submit" name="expenseId">
                    <FaTrash color="red"/>
                </Button>

          </fetcher.Form>
          {typeof budget !== "undefined" ? (
            <Link to={`/budget/${budget.id}`}>{budget.name}</Link>
          ) : (
            ""
          )}
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button type="submit">Delete</button>
        </fetcher.Form>
      </td>
    </>
  );
};
          

const Button = styled.button`
    border: none;
    background: none;
`
