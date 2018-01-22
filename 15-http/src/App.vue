<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn-primary btn" v-on:click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" v-on:click="fetchData">Get Data</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            user: {
                username: '',
                email: ''
            },
            users: []
        }
    },
    methods: {
        submit: function () {
            this.$http.post('', this.user)
                .then(response => {
                    console.log(response)
                }, error => {
                    console.log(error)
                });
        },
        fetchData: function () {
            this.$http.get('')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
        }
    }
}
</script>

<style>
</style>
