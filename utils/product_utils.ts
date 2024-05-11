import isValidArray from "./isValidArray"

export const getProductPrice = (productFields: any) => {
    if (!isValidArray(productFields.variant_price))
        return 0

    return productFields.variant_price.sort((a: number, b: number) => a - b)[0]
}

export const resolveRichText = (text: any) => {
    return String(text).replace('\\', '')
        .replaceAll('\n', '<br/>')
}