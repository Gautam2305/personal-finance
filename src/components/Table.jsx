import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const Table = ({expenses, showBudget = true}) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            ["Name", "Amount" ,"Date",showBudget ? "Budget": "",""].map((item,index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map(expense => (
                            <tr key={expense.id}>
                                <ExpenseItem expense={expense} showBudget={showBudget} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}