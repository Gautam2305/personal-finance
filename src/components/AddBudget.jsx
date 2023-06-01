import React, {useEffect} from "react";
import { useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
export const AddBudget = () => {
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
            <h2>Create Budget</h2>
            <Form ref={formRef} method="post">
                <div>
                    <label htmlFor="newBudget">Budget Name</label>
                    <input 
                    ref={focusRef}
                    type="text"
                    name="newBudget"
                    id="newBudget"
                    placeholder="e.g., Groceries"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input 
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="e.g.,Rs. 5000"
                    inputMode="decimal"
                    required
                    />
                </div>
                <input type="hidden" name="_action" value="addBudget"/>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <span>Creating Budget...</span>: <span>Create Budget</span> }
                </button>
            </Form>
        </div>
    )
}