export const formatCurrency = (amount) => {
    return amount?.toLocaleString(undefined, {
        style: "currency",
        currency: "INR"
    })
}