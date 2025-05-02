function handleBigInt(obj: any): any {
    if (typeof obj === 'bigint') {
        return obj.toString();
    } else if (obj instanceof Date) {
        return obj;
    } else if (Array.isArray(obj)) {
        return obj.map(handleBigInt);
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj: any = {};
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = handleBigInt(value);
        }
        return newObj;
    }
    return obj;
}

export default handleBigInt;