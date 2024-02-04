const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    currency: "PHP", style: 'currency'
})


export function CurrencyFormat (price: number) {
    return CURRENCY_FORMAT.format(price)
}