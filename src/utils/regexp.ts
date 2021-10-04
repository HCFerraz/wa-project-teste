export const removeSpecialCharacters = (event: string) => {
    return event.replace(/[^a-zA-Z0-9 ]/g, "")
}

export const removeCharacters = (event: string) => {
    return event.replace(/[^0-9]/g, "")
}

export const removeNumbers = (event: string) => {
    return event.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, "")
}