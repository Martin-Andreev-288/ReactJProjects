export const getTotals = (cart) => {
    console.log(cart);
    let totalAmount = 0;
    let totalCost = 0;
    /* Tr da izchislim obshtiq broy artikuli i obshtata cena, koeto i sme napravili. Mozhesh da se
    orientirash koe kyde e - tuk st-tite sa 11 i $5799,89 */
    for (let { amount, price } of cart.values()) {
        totalAmount += amount;
        totalCost += amount * price;
    }
    return { totalAmount, totalCost };
};