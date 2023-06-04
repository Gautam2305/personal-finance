import React, {useEffect} from "react";
import { useFetcher, Form } from "react-router-dom";
import { useRef } from "react";

export const AddExpense = ({budgets}) => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(()=> {
        if(!isSubmitting){
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting])
    return(
        <div>
            <h2> Add New <span> {budgets?.length === 1 && `${budgets.map(budget => budget.name)}`} </span> Expense </h2>
            <Form ref={formRef} method="post">
                <div>
                    <label htmlFor="newExpense">Expense Name</label>
                    <input 
                    ref={focusRef}
                    type="text"
                    name="newExpense"
                    id="newExpense"
                    placeholder="e.g., Apple"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input 
                    type="text"
                    name="newExpenseAmount"
                    id="newExpenseAmount"
                    placeholder="e.g.,Rs. 50"
                    inputMode="decimal"
                    step="0.01"
                    required
                    />
                </div>
                <div hidden={budgets.length === 1}>
                <label htmlFor="newExpenseBudget">Budget category</label>
                <select name="newExpenseBudget" id="newExpenseBudget" required>
                    {
                        budgets.sort((a,b)=> a.createdAt -b.createdAt).map(budget => {
                            return(
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            )
                        })
                    }
                </select>
                </div>
                <input type="hidden" name="_action" value="createExpense"/>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <span>Creating Expense...</span>: <span>Create Expense</span> }
                </button>
            </Form>
        </div>
    )
}