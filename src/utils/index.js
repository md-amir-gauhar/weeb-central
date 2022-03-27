export const filterData = (products, categories) => {
  const checkedCategories = Object.entries(categories).filter(cat => cat[1] === true).map(cat => cat[0])

  const filteredProducts = products.filter(product => checkedCategories.includes(product.categoryName))

  console.log(filteredProducts);

  return filteredProducts.length > 0 ? filteredProducts : products
}

export const sortData = (products, sortByPrice, sortByRating) => {
  switch (sortByPrice) {
    case "low-to-high":
      products = products.sort((a, b) => a.price - b.price)
      break
    case "high-to-low":
      products = products.sort((a, b) => b.price - a.price)
      break
    default:
      products = products
  }

  if (sortByRating) {
    products = products.filter(product => product.rating >= sortByRating)
  }

  return products
}