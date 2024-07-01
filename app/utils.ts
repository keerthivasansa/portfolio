
export function getRandValue(low: number, high: number) {
    return low + (Math.random() * (high - low));
}

export function capitalize(str: string) {
    if (str.length < 1)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}

export function disableOverflow() {
    document.body.style.overflow = "hidden";
}

export function enableOverflow() {
    document.body.style.overflowX = "auto";
}