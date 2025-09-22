<script lang="ts">
	import ClearButton from '$lib/components/ClearButton.svelte';
	import TaskInput from '$lib/components/TaskInput.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
</script>

<main>
	<section>
		<div class="container">
			<div class="list-block">
				<ClearButton />
				<TaskList />
				<TaskInput />
			</div>
		</div>
	</section>
</main>

<style>
	.list-block {
		width: clamp(750px, 60vw, 70%);
	}

	/* @media (max-width: 768px) {
		.list-block {
			width: min(90%, 650px);
		}
	} */

	@media (max-width: 480px) {
		.list-block {
			width: 100%;
		}
	}
</style>
