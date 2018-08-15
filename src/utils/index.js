// var ingredients = ['meat', 'cabbage', 'tomato', 'cucumber', 'bow'];
var uniqid = require('uniqid');

var data = {
	ingredients: [
		{
			name: 'meat',
			price: 10,
		},{
			name: 'cabbage',
			price: 2,
		},
		{
			name: 'tomato',
			price: 3,
		},
		{
			name: 'cucumber',
			price: 5,
		},
		{
			name: 'bow',
			price: 3,
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
				price: 2,
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
				price: 2,
				id: uniqid(),
			},{
				name: 'cucumber',
				price: 5,
				id: uniqid(),
			}],
		},
	]
};

export default data;