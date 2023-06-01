export const calculatePercentage = (amt) => {
    return amt?.toLocaleString(
        undefined,
        {
            style: "percent",
            minimumFractionDigits: 0
        }
    )

}