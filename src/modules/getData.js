export const getData = async () => {
    const res = await fetch('https://marchodb-f079f-default-rtdb.firebaseio.com/goods.json');

    return await res.json();
};