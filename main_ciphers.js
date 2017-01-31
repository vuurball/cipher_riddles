
Vue.component('riddlebox',{
	 props: ['cipheredriddle'],
	 template: '<h1>{{ cipheredriddle }}</h1>'
 

});


Vue.component('letterskeys',{
	props:[],
 	template: '<h1>test2</h1>'
});

new Vue({
	el: '#app',
	data: {
		test:'olga',
		currentRiddle: 'Loading riddle',
		cipheredRiddle: 'Loading riddle..',
		//mpa: ['A'=>'1'],
		
		lettersArr: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	},
	created: function(){
		this.getNewRiddle();
	}, 
	methods: {
		getNewRiddle: function(){
			this.currentRiddle = "Hello";
			this.cipherRiddle(this.currentRiddle);
		},
		cipherRiddle: function(currentRiddle){
			this.cipheredRiddle = currentRiddle; //hash it here
		}
	}
});