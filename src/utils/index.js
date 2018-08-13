// var ingredients = ['meat', 'cabbage', 'tomato', 'cucumber', 'bow'];

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
			id: 1,
			name: 'First butger',
			ingredients: [{
				name: 'meat',
				price: '10',
			},{
				name: 'cabbage',
				price: '20',
			}],
		},
		{
			id: 2,
			name: 'Last butger',
			ingredients: [{
				name: 'meat',
				price: '10',
			},{
				name: 'cabbage',
				price: '20',
			}],
		},
	]
};

export default data;