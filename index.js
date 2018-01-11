new Vue ({
	el: "#app",
	data: {
		counter: 0,
		x: 0,
		y: 0,
	},
	methods: {
		increaseClick: function(num, event) {
			this.counter += num;
		},
		updateCordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		dummy: function() {
			event.stopPropagation();
		},
		alertMe: function(event) {
			alert('Alert!');
		},
	}
})

new Vue ({
	el: "#exercise",
	data: {
		keyValue: "This is value",
	},
	methods: {
		alert: function(event) {
			alert(event);
		},
		saveValue: function(event) {
			this.keyValue = event.target.value;
			alert("save done!");
		},
	},
})

new Vue ({
	el: "#app-23",
	data: {
		name: "Max",
	},
	methods: {
		updateName: function(event) {
			this.name = event.target.value;
		}
	}
})

new Vue ({
	el: "#app-24",
	data: {
		counter: 0,
		secondCounter: 0,
	},
	methods: {
		// increaseCounter: function() {
		// 	this.counter++;
		// 	this.result = this.counter > 5 ? 'Greater than 5': 'smaller than 5';
		// },
		result: function() {
			console.log('method');
			return this.counter > 5 ? 'Greater than 5': 'smaller than 5';
		},
	},
	computed: {
		output: function() {
			console.log('computed');
			return this.counter > 5 ? 'Greater than 5': 'smaller than 5';
		},
	},
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		}
	},
})

new Vue ({
	el: "#app-25",
	data: {
		link: "http://google.com"
	},
	methods: {
		changeLink: function() {
			this.link = "http://apple.com"
		},
	},
})
