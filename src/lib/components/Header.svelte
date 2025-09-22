<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';
	let theme: Theme = 'dark';

	function applyTheme(t: Theme) {
		document.documentElement.setAttribute('data-theme', t);
		theme = t;
		localStorage.setItem('theme', t);
	}

	function toggleTheme() {
		applyTheme(theme === 'light' ? 'dark' : 'light');
	}

	onMount(() => {
		const saved = localStorage.getItem('theme') as Theme | null;

		if (saved !== null) {
			applyTheme(saved === 'light' ? 'light' : 'dark');
		} else {
			const prefersDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
			applyTheme(prefersDark ? 'dark' : 'light');
		}
	});
</script>

<nav>
	<div class="container">
		<a href="/" class="logo"> Simple List </a>
		<div class="nav-btn-group">
			<button
				class="btn-theme"
				aria-label={theme === 'light' ? 'light mode' : 'dark mode'}
				onclick={toggleTheme}
			>
				{theme === 'light' ? '☀️' : '🌕'}
			</button>
		</div>
	</div>
</nav>

<style>
	nav {
		background-color: #000;
		color: #fff;
		border-bottom: 4px solid light-dark(#1ae4ff, #0055b6);
	}

	nav .container {
		display: flex;
		justify-content: space-between;
	}

	.logo {
		color: #fff;
		font-size: 1.5rem;
		text-decoration: none;
	}

	.btn-theme {
		color: #fff;
		font-size: 2rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
</style>
