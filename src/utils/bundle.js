const bundle = function () {
    let products = [];

    const add    = product => {
        products = [...products, product]
    }
    const remove = product => {
        products = products.filter(p => p !== product)
    }
    const cost   = () => products.reduce((acc, product) => acc + product.cost(), 0)

    return {add, remove, cost}
};

export {bundle}