<script lang="ts">
	import { addTask } from '$lib/stores/taskStore';
	import { onMount } from 'svelte';

	let inputValue = $state<string>('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		addTask(inputValue);
		inputValue = '';
	}

	onMount(() => {
		const test_list: string[] = ['I am a test task', 'Oh another test task', 'Random third task'];
		for (const task of test_list) {
			addTask(task);
		}
	});
</script>

<form onsubmit={handleSubmit}>
	<label for="task-input"></label>
	<input type="text" name="task-input" id="task-input" bind:value={inputValue} />
	<button>Add</button>
</form>

<style>
</style>
