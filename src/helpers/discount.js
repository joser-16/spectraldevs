export default function applyDiscount(price, percentage) {
    return Math.round(price - (price * (percentage / 100) ))
}