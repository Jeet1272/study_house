const getStoredData = () => {
    let listCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('list-cart');
    if (storedCart) {
        listCart = JSON.parse(storedCart);
    }
    return listCart
}
export { getStoredData }