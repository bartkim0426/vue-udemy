<template>
    <div class="container">
				<app-header></app-header>
        <hr>
        <div class="row">
						<servers></servers>
						<app-server-details></app-server-details>
        </div>
        <hr>
				<app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/header.vue'
import Servers from './components/server/Servers.vue'
import Details from './components/server/Details.vue'
import Footer from './components/shared/Footer.vue'

export default {
	components: {
		appHeader: Header,
		Servers,
		'app-server-details': Details,
		'app-footer': Footer,
	}
}
</script>

<style>

</style>
