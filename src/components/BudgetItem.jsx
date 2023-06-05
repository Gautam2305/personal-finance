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
      <div><h2>{name}</h2>
        <h4><b>{formatCurrency(amount)} allotted</b></h4>
        </div>
      <progress max={amount} value={spent}>
        {calculatePercentage(spent / amount)}
      </progress>
      <Center>
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </Center>
      <Wrapper>
        {showDelete ? (
          <Form method="post" action="delete">
            <button type="submit">Delete Budget</button>
          </Form>
        ) : (
          <Link to={`/budget/${id}`} style={linkStyle}>View Details</Link>
        )}
      </Wrapper>
    </div>
  );
};


const Center = styled.div`
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`
const Wrapper = styled.div`
    // margin: 2rem 0rem;
    margin-left: 2rem;
    margin-top: 2rem;
`
const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "2px",
    width: '4rem',
    textAlign: 'center',
    fontSize: "1.1rem",
    fontWeight: '700',
}
