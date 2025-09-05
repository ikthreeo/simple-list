<script lang="ts">
	import Input from '$lib/components/TaskInput.svelte';

	function addTask(newTask: string) {
		console.log(newTask);
	}
</script>

<main>
	<Input {addTask} />
</main>

<style>
	main {
		background-color: aliceblue;
	}
</style>
