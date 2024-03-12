<script setup lang="ts">
import { ref } from "vue"
</script>

<template>
	<v-app-bar
	:border=10
	class="d-none d-md-block">
		<template #default>
			<v-spacer></v-spacer>
			<v-btn 
			to="/#card-overview"
			class="mr-4 ml-4"
			rounded="0"
			variant="flat"
			:active="false"
			style="display: flex; align-items: center; height: 100%">
				<span style="font-size: 20px;">Shengyu Liu</span>
			</v-btn>
			<v-divider vertical class="mr-8"></v-divider>
			<v-btn
			to="/#card-overview"
			class="mr-4"
			prepend-icon="mdi-home"
			:active="false"
			>
				Home
			</v-btn>
			<!-- <v-btn
			to="/#card-bio"
			class="mr-4"
			prepend-icon="mdi-account"
			:active="false"
			>
				Bio
			</v-btn> -->
			<v-btn
			to="/#card-publications"
			class="mr-4"
			prepend-icon="mdi-bookshelf"
			:active="false"
			>
				Publications
			</v-btn>
			<v-btn
			to="/#card-awards"
			class="mr-4"
			prepend-icon="mdi-license"
			:active="false"
			>
				Awards
			</v-btn>
			<v-btn
			to="/#card-projects"
			class="mr-4"
			prepend-icon="mdi-hammer-screwdriver"
			:active="false"
			>
				Projects
			</v-btn>
			<v-spacer></v-spacer>
		</template>
	</v-app-bar>    
    
</template>
