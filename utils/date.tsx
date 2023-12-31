export const toDateOnly = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export const toNightOf = (date: Date) => {
    if (date.getHours() < 12) {
        date.setDate(date.getDate() - 1);
    } 

    return toDateOnly(date);
}

export const calculateDuration = (startDate: Date, endDate: Date) => {
    endDate = new Date(endDate);
    startDate = new Date(startDate);

    const difference = endDate.getTime() - startDate.getTime();
    const hours = difference / (1000 * 60 * 60);
    return Math.round(hours * 100) / 100;
}
