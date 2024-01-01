export const toDateOnly = (date: Date) => {
    let dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    dateOnly.setUTCHours(0, 0, 0, 0);
    return dateOnly;
}

export const toNightOf = (date: Date) => {
    const sleepDate = new Date(date);
    if (sleepDate.getHours() < 12) {
        sleepDate.setDate(sleepDate.getDate() - 1);
    } 

    return toDateOnly(sleepDate);
}

export const calculateDuration = (startDate: Date, endDate: Date) => {
    endDate = new Date(endDate);
    startDate = new Date(startDate);

    const difference = endDate.getTime() - startDate.getTime();
    const hours = difference / (1000 * 60 * 60);
    return Math.round(hours * 10000) / 10000;
}
