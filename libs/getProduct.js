async function getProduct(uid) {
    const res = await fetch(`https://storefront-4a3db-default-rtdb.firebaseio.com//shoes/${uid}.json`)
    const product = await res.json()
    return product
}

export {getProduct}