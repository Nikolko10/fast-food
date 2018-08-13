// var ingredients = ['meat', 'cabbage', 'tomato', 'cucumber', 'bow'];
var uniqid = require('uniqid');

var data = {
	ingredients: [
		{
			name: 'meat',
			price: 10,
		},{
			name: 'cabbage',
			price: 20,
		},
		{
			name: 'tomato',
			price: 1,
		},
		{
			name: 'cucumber',
			price: 3,
		},
		{
			name: 'bow',
			price: 6,
		}
	],
	all_burgers: [
		{
			id: uniqid(),
			name: 'First butger',
			ingredients: [{
				name: 'meat',
				price: 10,
				id: uniqid(),
			},{
				name: 'cabbage',
				price: 20,
				id: uniqid(),
			}],
		},
		{
			id: uniqid(),
			name: 'Last butger',
			ingredients: [{
				name: 'meat',
				price: 10,
				id: uniqid(),
			},{
				name: 'cabbage',
				price: 20,
				id: uniqid(),
			},{
				name: 'cucumber',
				price: 3,
				id: uniqid(),
			}],
		},
	]
};

export default data;