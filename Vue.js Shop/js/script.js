var home = { template: '#home' }
var catalog = { template: '#catalog' }
var about = { template: '#about' }
var cart = { template: '#cart'}

// Связываем ссылки с компонентами
var myRoutes = [
	{ path: '/', component: home },
	{ path: '/catalog', component: catalog },
	{ path: '/about', component: about },
	{ path: '/cart' , component: cart },
]
// Инициализация VueRouter
var myRouter = new VueRouter({
	routes: myRoutes
})

Vue.component("card", {
	props: ["item","index"],
	methods: {
		getIndex: function(i) {
			var cart = this.$root.cart;
			var resulution = false;
			var indexEl;

			if(cart.length <= 0) {
				 cart.push({id: i, count: 1});
			} else {
				cart.forEach(function(item, index){
					if(item.id == i) {
						resulution = true;
						indexEl = index;
						return;
					}
				})
				
				if(resulution) {
					cart[indexEl].count++;
				} else {
					cart.push({id: i, count: 1});
				}
			}
			console.log(cart)
		}
	},
	template:`
		<div class="uk-card uk-card-default uk-card-body uk-width-1-3">
			<div class="uk-width-1-1 uk-height-small uk-background-contain" v-bind:style="'background-image: url(' + item.pic + ')'"></div>
			<h3 class="uk-card-title">{{ item.caption }}</h3>
			<p>{{ item.price }}</p>
			<input type="submit" value="Купить" class="uk-align-right uk-button uk-button-default" @click="getIndex(index)">
		</div>`
})

Vue.component("cart-item" , {
	props: ["item", "index"],
	methods: {
		removeGoods: function(i){
			this.$root.cart.splice(i, 1);
		}
	},
	template: `
	<div class="uk-card uk-card-default uk-card-body uk-width1-1 uk-margin-top">
					<img v-bind:src="this.$root.carList[item.id].pic" width="100px">
					<div class="uk-display-inline-block uk-margin-medium-left">{{ item.count }}</div>
				<div class="uk-flex-inline uk-flex-wrap uk-text-middle uk-margin-medium-left">
					<div class="uk-width-1-1">{{ this.$root.carList[item.id].caption }}</div>
					<div class="uk-width-1-1">{{ this.$root.carList[item.id].price }}</div>
				</div>
					<div class="uk-flex uk-height-1-1 uk-align-right uk-flex-middle">
						<button href="#" uk-icon="icon: close" v-on:click="removeGoods(index)"></button>
					</div>
				</div>`
})

var carList = [
	{
		pic: "https://data1.ibtimes.co.in/en/full/697186/skoda-superb.jpg",
		caption: "Skoda Superb",
		price: "2 569 777 P",
		brand: "Skoda"
	},
	{
		pic: "https://st.motortrend.ca/uploads/sites/10/2015/11/2016-mercedes-benz-sclass-s600-sedan-angular-front.png",
		caption: "Maybach S600",
		price: "17 899 000 P",
		brand: "Mersedes"
	},
	{
		pic: "https://s.aolcdn.com/commerce/autodata/images/USC60BMC531A021001.jpg",
		caption: "BMW M6",
		price: "6 790 000 P",
		brand: "bmw"
	},
	{
		pic: "https://images.dealer.com/ddc/vehicles/2019/Subaru/WRX/Sedan/trim_Limited_cbc7cd/color/Crystal%20White%20Pearl-WHC-199%2C199%2C195-640-en_US.jpg",
		caption: "Subaru WRX STi",
		price: "3 099 000 P",
		brand: "Subaru"
	},
	{
		pic: "http://www.drivedrill.com/images/kia-optima-3.jpg",
		caption: "KIA Optima",
		price: "2 350 000 P",
		brand: "Kia"
	},
	{
		pic: "https://www.bmw.kz/content/dam/bmw/common/all-models/5-series/sedan/2016/Model%20Card/bmw-modelfinder-g30-posi-stage2-890x501.png",
		caption: "BMW 760Li",
		price: "18 999 000 P",
		brand: "bmw"
	},
	{
		pic: "http://grupocees.com.mx/upload/noticias/ad642be7e06a5c0c38e950f50f7c0845.png",
		caption: "Lexus IS250",
		price: "2 250 000 P",
		brand: "Lexus"
	},
	{
		pic: "https://www.fmdt.info/img/toyota-models/2018-toyota-camry-le-32-white.png",
		caption: "Toyota Camry",
		price: "1 999 999 P",
		brand: "Toyota"
	},
	{
		pic: "http://pngimg.com/uploads/ferrari/ferrari_PNG10680.png",
		caption: "Ferrari F12",
		price: "15 678 999 P",
		brand: "Ferrari"
	},
	{
		pic: "http://pngimg.com/uploads/audi/audi_PNG1752.png",
		caption: "Audi RS6",
		price: "7 777 777 P",
		brand: "Audi"
	},
	{
		pic: "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Mercedes-Benz-S63-AMG-White-Car-PNG-Image.png",
		caption: "MB S63 AMG",
		price: "9 155 999 P",
		brand: "Mersedes"
	},
	{
		pic: "https://st.motortrend.com/uploads/sites/10/2015/11/2016-nissan-gtr-premium-coupe-angular-front.png",
		caption: "Nissan GTR",
		price: "5 555 555 P",
		brand: "Nissan"
	},
	{
		pic: "http://gtrnissanskyline.com/wp-content/uploads/2016/10/r32pic2-1024.jpg",
		caption: "Nissan GTR R32",
		price: "1 320 000 P",
		brand: "Nissan"
	},
	{
		pic: "https://www-europe.nissan-cdn.net/content/dam/Nissan/global/vehicles/gt-r/r35/eulhd/2_minor_change/overview/17TDIeulhd_GTRHelios034.jpg.ximg.s_12_h.smart.jpg",
		caption: "Nissan GTR R33",
		price: "1 888 000 P",
		brand: "Nissan"
	},
	{
		pic: "http://content.scalecar.ru/clipart/images-for-item-41456/u21YAOmN5EA3TrmD-00.jpg",
		caption: "Ford GT",
		price: "23 000 000 P",
		brand: "Ford"
	},
]

var app = new Vue({
	el: "#app",
	data: {
		cars: carList,
		carList: carList,
		search: "",
		brands: [],
		price: [],
		tempArray: [],
		cart: []
	},
	router: myRouter,
	watch: {
		search: function() {
			var self = this;

			if(this.search == "") {
				this.cars = carList;
			}

			if(this.tempArray.length == 0) {
				this.tempArray = carList;
			}

			this.cars = this.tempArray.filter(function(item) {
				var cardItem = item.caption.toLowerCase();
				var searchItem = self.search.toLowerCase();

				if(cardItem.includes(searchItem)) {
					return true;
				}
			})
		},
		brands: function() {
			this.filter();
		},
		price: function() {
			this.filter();
		}
	},
	methods: {
		filter: function() {
			var self = this;
			this.tempArray = [];

			function findBrand() {
				if(self.brands.length != 0) {
					for(var i = 0; i < self.brands.length; i++) {
						self.tempArray = self.tempArray.concat(self.cars.filter(function(item) {
								if(self.brands[i] == item.brand) {
									return true;
								}
							})
						)
					}

					self.cars = self.tempArray;
				}
			}

			function findPrice() {
				self.cars = carList.filter(function(item) {
					var priceFrom = +self.price[0] || 0;
					var priceTo = +self.price[1] || Number.MAX_VALUE;
					var priceCar = +item.price.replace(/\D/gi,"");

					if(priceFrom <= priceCar && priceTo >= priceCar && priceTo > priceFrom) {
						return true;
					}
				})
			}

			if(self.price.length == 0/* && self.brands.length == 0 && this.search == ""*/) {
				self.cars = carList;

				findBrand()

			} else {
				self.cars = [];

				findPrice();
				findBrand();
			}
		}
	},
	computed:{
		getCountGoods: function(){
			var count = 0;
			this.cart.forEach(function(item){
				count += item.count;
			})
			return count;
		},
		getPriceGoods: function(){
			var price = 0;
			this.cart.forEach(function(item){

				price += +this.carList[item.id].price.replace(/\D/gi,"") * item.count;
			})
			return String(price).replace(/./g,function(l, i, s){
				return (s.length - i) % 3 == 0 ? " " + l : l;
 			});
		}
	}
})