
export function getRandValue(low: number, high: number) {
    return low + (Math.random() * (high - low));
}

export function capitalize(str: string) {
    if (str.length < 1)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}