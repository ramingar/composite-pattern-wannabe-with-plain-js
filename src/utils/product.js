const product = function (price) {
    const cost = () => price
    return {cost}
}

export {product}