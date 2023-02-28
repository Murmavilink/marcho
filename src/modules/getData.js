export const getData = async () => {
    const res = await fetch('https://marchodb-45caa-default-rtdb.firebaseio.com/goods.json');

    return await res.json();
};