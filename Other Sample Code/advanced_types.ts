// union types
function padLeft(value: string, padding: string | number) {
    /**
     * helps avoid instances when padding will not be a string or a number
     * hence puts some constrains
    */
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}