const sumPrice = (ingredients) => {
	var price = 0;
	ingredients.forEach((item) => {
		price += +item.price;
	})
	return price;
}

export {
	sumPrice,
};