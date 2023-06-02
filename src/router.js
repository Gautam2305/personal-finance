import React from "react";
import { Dashboard, dashboardAction, dashboardLoader } from "./pages/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import { Error } from "./pages/Error";
import { MainLayout,mainLoader } from "./pages/MainLayout";
import { logoutAction } from "./actions/logout";
import { ExpensesPage, expensesAction, expensesLoader } from "./pages/ExpensesPage";
import { BudgetPage, budgetAction, budgetLoader } from "./pages/BudgetPage";
import { deleteBudget } from "./actions/deleteBudget";

export const RouterPath = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        loader: mainLoader,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
                loader: dashboardLoader,
                action: dashboardAction,
                errorElement: <Error/>
            },
            {
                path: "logout",
                action: logoutAction
            },
            {
                path: "expenses",
                element: <ExpensesPage/>,
                loader: expensesLoader,
                action: expensesAction,
                errorElement: <Error/>
            },
            {
                path: "budget/:id",
                element: <BudgetPage/>,
                loader: budgetLoader,
                action: budgetAction,
                errorElement: <Error/>,
                children: [
                    {
                        path: "delete",
                        action: deleteBudget,

                    }
                ]
            }
        ]
    }
])