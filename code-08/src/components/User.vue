<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
		<button v-on:click="changeName">Change my name</button>
		<p>Name is {{ name }}</p>
		<p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
					v-bind:my-name="name" 
					v-on:nameWasReset="name = $event"
					v-bind:resetFn="resetName"
					v-bind:userAge="age">
				</app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
				 v-bind:userAge="age"
					></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
		data: function() {
			return {
				name: "Max",
				age: 27
			}
		},
		methods: {
			changeName() {
				this.name = "Anna";
			},
			resetName() {
				this.name = "Max";
			}
		},
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
