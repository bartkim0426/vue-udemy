<template>
    <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Filters & Mixins</h1>
            <p>{{ text | toUppercase | to-lowercase }}</p>
            <hr>
            <button v-on:click="fruits.push('Berry')">Add new Item</button>
            <input type="text" v-model="filterText">
            <ul>
                <li v-for="fruit in filterFruits">{{ fruit }}</li>
            </ul>
            <hr>
            <app-list></app-list>
        </div>
    </div>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';
import List from './List.vue';

    export default {
        data() {
            return {
                text: 'Hello there!'
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            'appList': List
        },
        mixins: [fruitMixin]
    }
</script>

<style>
</style>

