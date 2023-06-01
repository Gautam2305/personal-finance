import { redirect } from "react-router"
import { deleteItem } from "../utils/delete-item"
import { toast } from "react-toastify"
export const logoutAction = async() => {
    deleteItem({key:"userName"});
    deleteItem({key:"budgets"});
    deleteItem({key:"expenses"});
    toast.success("You've deleted your account");
    return redirect("/")
}