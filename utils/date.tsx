export const toDateOnly = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export const toNightOf = (date: Date) => {
    if (date.getHours() < 12) {
        date.setDate(date.getDate() - 1);
    } 

    return toDateOnly(date);
}