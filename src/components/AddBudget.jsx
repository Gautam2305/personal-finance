import React, { useEffect } from "react";
import styles from "../components/AddBudget.module.css";
import { useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
export const AddBudget = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className={`${styles.createbudform}`}>
      <Form ref={formRef} method="post" className={`${styles.budform}`}>
        <h2 className={`${styles.head}`}>Create New Budget</h2>
        <label htmlFor="newBudget">Budget Name : </label>
        <input
          ref={focusRef}
          type="text"
          name="newBudget"
          id="newBudget"
          placeholder="e.g. Groceries"
          required
        />

        <label htmlFor="amount">Amount : </label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="e.g. Rs. 5000"
          inputMode="decimal"
          required
        />

        <input type="hidden" name="_action" value="addBudget" />
        <button
          type="submit"
          className={`${styles.createbtn}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Creating Budget...</span>
          ) : (
            <span>Create Budget</span>
          )}
        </button>
      </Form>
    </div>
  );
};
