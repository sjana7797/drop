export const currencyFormatter=(currency:number):string=>{
    const formatedCurrency = currency.toLocaleString("en-IN",{
        style:"currency",
        currency:"INR"
    })
    return formatedCurrency
}