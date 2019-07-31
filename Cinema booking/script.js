
var myRoutes = [
	{ path: '/movies/:dynamicId', component: { template: "#movie"} },
	{ path: '/movies', component: { template: "#movies" } },
	{ path: '/movies/:dynamicId/:times', component: { template:"#times" }}
]

var myRouter = new VueRouter({
	routes: myRoutes
})


var app = new Vue({
	el: "#app",
	router: myRouter,
	data: {
			movies: [
				{ caption: "День Радио", desc: "Один день из жизни модной московской радиостанции…", pic: "1750.jpg", times: ["10:00", "11:00", "12:00"]},
				{ caption: "Громкая Связь", desc: "Семеро друзей собрались вместе, и решили сыграть в игру…",pic:"12.jpg", times: ["10:00", "11:00"] },
				{ caption: "Большой Куш", desc: "Никогда не доверяйте цыганам…", times: ["10:00", "11:00"]},
				{ caption: "Третий лишний", desc: "Чудесный плющевый медведь, превратился в проблему для молодой пары…" },
			],

			seats:[
				[{value: 1, state: false},{value: 2, state: false},{value: 3, state: false},{value: 4, state: false},{value: 5, state: false},{value: 6, state: false}],
				[{value: 1, state: false},{value: 2, state: false},{value: 3, state: false},{value: 4, state: false},{value: 5, state: false},{value: 6, state: false}],
				[{value: 1, state: false},{value: 2, state: false},{value: 3, state: false},{value: 4, state: false},{value: 5, state: false},{value: 6, state: false}],
				[{value: 1, state: false},{value: 2, state: false},{value: 3, state: false},{value: 4, state: false},{value: 5, state: false},{value: 6, state: false}],
				[{value: 1, state: false},{value: 2, state: false},{value: 3, state: false},{value: 4, state: false},{value: 5, state: false},{value: 6, state: false}],
			]
		},
		methods: {
			changeState: function (row, col) {
				this.seats[row][col].state = !this.seats[row][col].state;
			},
		}
})


