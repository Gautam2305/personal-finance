import React from "react";
import { formatCurrency } from "../utils/format-currency";
import { calculateBudget } from "../utils/calc-budget";
import { calculatePercentage } from "../utils/calc-percentage";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";

export const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount } = budget;
  const spent = calculateBudget(id);
  return (
    <div key={id}>
      <h3>{name}</h3>
      <h4>{formatCurrency(amount)} allotted</h4>
      <progress max={amount} value={spent}>
        {calculatePercentage(spent / amount)}
      </progress>
      <div>
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      <div>
        {showDelete ? (
          <Form method="post" action="delete">
            <button type="submit">Delete Budget</button>
          </Form>
        ) : (
          <Link to={`/budget/${id}`}>View Details</Link>
        )}
      </div>
    </div>
  );
};


const Center = styled.div`
    text-align: center;
    color: white;
`
const Wrapper = styled.div`
    // margin: 2rem 0rem;
    margin-left: 2rem;
    margin-top: 2rem;
`
const linkStyle = {
    color: "black",
    // textDecoration: "none",
    padding: "2px",
}
