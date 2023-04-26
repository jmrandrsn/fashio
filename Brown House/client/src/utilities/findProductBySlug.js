import ProductData from './products.json';

function findProductBySlug(slug) {
	return ProductData.find((product) => slugify(product.productName) === slug);
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export default findProductBySlug;
