
export const getData = async(value) => {
    if (typeof window !== 'undefined') {
        const userId = await localStorage.getItem(value);
        return userId;
    }
    return undefined;
}

export const setData = async(key,value) => {
    if (typeof window !== 'undefined') {
        await localStorage.setItem(key,value);
        
    }
}


export const removeData = async(value) => {
    if (typeof window !== 'undefined') {
        await localStorage.removeItem(value);
        
    }
}

