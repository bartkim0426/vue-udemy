<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<button v-on:click="selectedComponent = 'appQuote'">Quote</button>
				<button v-on:click="selectedComponent = 'appAuthor'">Author</button>
				<button v-on:click="selectedComponent = 'appNew'">New</button>
				<hr>
				<p>{{ selectedComponent }}</p>
				<keep-alive>
					<component v-bind:is="selectedComponent">
						<p>Default content</p>
					</component>
				</keep-alive>
				<!-- <app-quote> -->
				<!-- 	<h2 slot="title">{{ quoteTitle }}</h2> -->
				<!-- 	<p>Test</p> -->
				<!-- </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import appAuthor from './components/Author.vue';
import appNew from './components/New.vue';

    export default {
		data: function() {
			return {
				quoteTitle: 'The Quote',
				selectedComponent: 'appQuote'
			}
		},
		components: {
			appQuote: Quote,
			appAuthor,
			appNew
		}
    }
</script>

<style>
</style>
