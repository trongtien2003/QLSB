function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}

export function formatDate(date) {
    date = new Date(date);
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join("-");
}

export const handleCalcTime = (begin, end) => {
    const startHour = begin.slice(0, 2),
        endHour = end.slice(0, 2),
        startMins = begin.slice(3, 5),
        endMins = end.slice(3, 5);
    let hour = +endHour - +startHour;
    let mins = +endMins - +startMins;
    if (mins < 0) {
        hour -= 1;
        mins = 60 - Math.abs(mins);
    }
    return `${hour} giờ và ${mins} phút`;
};

export const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
});

export const formatHour = (hour) => {
    return hour.slice(0, 5);
};
export const getCurrentDate = (withHour = false) => {
    if (withHour) return new Date();
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
};

export const formatDateYmd = (date) => {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};
