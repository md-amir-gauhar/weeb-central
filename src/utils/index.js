export const filterData = (products, categories) => {
  const checkedCategories = Object.entries(categories).filter(cat => cat[1] === true).map(cat => cat[0])

  const filteredProducts = products.filter(product => checkedCategories.includes(product.categoryName))

  return filteredProducts.length > 0 ? filteredProducts : products
}

export const sortData = (products, sortByPrice, priceRange, sortByRating) => {
  let sortedProducts;
  switch (sortByPrice) {
    case "low-to-high":
      sortedProducts = products.sort((a, b) => a.price - b.price)
      break
    case "high-to-low":
      sortedProducts = products.sort((a, b) => b.price - a.price)
      break
    default:
      sortedProducts = products
  }

  if (sortByRating) {
    sortedProducts = products.filter(product => product.rating >= sortByRating)
  }

  if (priceRange) {
    sortedProducts = products.filter(product => product.price <= +priceRange)
  }

  return sortedProducts
}