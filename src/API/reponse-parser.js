const reponseParser = (response = {}) => {
    const arr = [];

    Object.keys(response).forEach(key => {
        arr.push({
            id: key,
            ...response[key]
        })
    });

    return arr;
}

export default reponseParser