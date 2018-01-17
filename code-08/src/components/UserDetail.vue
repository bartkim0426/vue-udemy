<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
		<p>User Name: {{ swichName() }}</p>
		<p>User Age: {{ userAge }}</p>
		<button v-on:click="resetName">Reset Name</button>
		<button v-on:click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
	// props: ['myName'],
	// validation을 하고 싶으면 props를 array가 아닌 object로 작성
	props: {
		// myName: String,
		// multitype으로 array 사용 가능
		// myName: [String, Array]
		// 이것 자체도 object로 사용해서 required를 지정 가능
		myName: {
			type: String,
			default: "seul"
			//required: true
		},
		resetFn: Function,
		userAge: Number,
// object를 사용하는 경우
// 		myName: {
// 			type: Object,
// 			default: function() {
// 				return { ... }
// 			}
// 		}
	},
	methods: {
		swichName() {
			return this.myName.split("").reverse().join("")
		},
		resetName() {
			this.myName = "Max";
			this.$emit('nameWasReset', this.myName);
		}
	},
	created() {
		eventBus.$on('ageWasEdited', (age) => {
			this.userAge = age;
		});
	}
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
