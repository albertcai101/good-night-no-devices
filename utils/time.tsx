export const getDynamicMorningTextSize = (date : Date) => {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Adjust hours for modular arithmetic, with 8 AM as zero point
    const adjustedSeconds = (totalSeconds - 8 * 3600 + 86400) % 86400; // 86400 seconds in a day
    const radians = (2 * Math.PI / 86400) * adjustedSeconds;

    // Sine function for smooth transition, scaled and offset for size
    const size = (Math.pow(Math.max(Math.sin(radians), 0),40) * 24 + 12).toFixed(2); // Range from 12px to 36px
    return size;
};

export const getDynamicNightTextSize = (date : Date) => {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Adjust hours for modular arithmetic, with 11 PM as zero point
    const adjustedSeconds = (totalSeconds - 23 * 3600 + 86400) % 86400; // 86400 seconds in a day
    const radians = (2 * Math.PI / 86400) * adjustedSeconds;

    // Sine function for smooth transition, scaled and offset for size
    const size = (Math.pow(Math.max(Math.sin(radians), 0),40) * 24 + 12).toFixed(2); // Range from 12px to 36px
    return size;
};
