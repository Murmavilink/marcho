export const getData = async () => {
    const res = await fetch('https://marchodb-edde5-default-rtdb.firebaseio.com/goods.json');

    return await res.json();
};