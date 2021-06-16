<template>
	<div class="hidden md:block">
		<div class="p-5 header">
			<div class="logo">
				<a-image :width="50" :height="50" placeholder :src="userInfo.avatar_url" />
			</div>
			<div>
				<h1 class="title">
					虾哔哔
				</h1>
				<ul class="nav">
					<li v-for="(item) in routerPath" :key="item.path">
						<router-link :to="{name:item.name}">{{item.name}}</router-link>
					</li>
					<li>
						<Theme />
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="md:hidden">
		<!-- <a-collapse :bordered="false">
			<template #expandIcon="props">
				<MenuOutlined :style="{color:'var(--main-color)'}" />
			</template>
			<a-collapse-panel key="1">
				<ul>
					<li v-for="(item) in routerPath" :key="item.path">
						<router-link class="block" :to="{name:item.name}">{{item.name}}</router-link>
					</li>
				</ul>
			</a-collapse-panel>
		</a-collapse> -->
		<div class="p-5 m-header">
			<div class="text-right">
				<MenuOutlined :style="{color:'var(--main-color)'}" class="text-xl" @click="toggleNavClass" />
			</div>
			<ul ref="m_nav" class="m-nav">
				<li class="text-base text-center" v-for="(item) in routerPath" :key="item.path">
					<router-link class="block" :to="{name:item.name}">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from "vue-router";
	import { useStore } from "vuex";
	import { computed, ref } from "vue";
	import Theme from "@/components/theme.vue";
	import { MenuOutlined } from "@ant-design/icons-vue";

	const store = useStore();
	const router = useRouter();
	const userInfo = computed(() => store.state.userInfo);
	const routerPath = computed(() => router.options.routes[0].children);

	const m_nav = ref(null);

	const toggleNavClass = () => {
		m_nav.value.classList.toggle("h-auto");
	};
</script>

<style lang="less" scoped>
	.header {
		display: flex;
		margin-bottom: 20px;
		align-items: center;

		.logo {
			margin-right: 20px;
			display: flex;
			border-radius: 50%;
			overflow: hidden;
		}
		.title {
			font-size: 24px;
			margin: 0;
		}
		ul.nav {
			display: flex;
			li {
				padding: 0 20px;
				border-right: 1px dotted var(--main-color);
				&:last-child {
					border: none;
					padding-right: 0;
				}
				&:first-child {
					padding-left: 0;
				}
				::v-deep(*) {
					font-size: 16px;
				}
			}
		}
	}

	.m-header {
		position: sticky;
		top: 0;
		.m-nav {
			&.h-auto {
				max-height: 120px;
			}
			max-height: 0;
			overflow: hidden;
			transition: all 0.3s;
			li {
				border-bottom: 1px dotted var(--main-color);
			}
		}
	}
</style>