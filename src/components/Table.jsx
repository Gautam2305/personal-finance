import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./Table.css";

export const Table = ({expenses, showBudget = true}) => {
    return(
        <div style={{
            margin: '2rem'
        }}>
            <table>
                <thead>
                    <tr className="topline">
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
