<script lang="ts">
	import { addTask } from '$lib/stores/taskStore';

	let inputValue = $state<string>('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		addTask(inputValue);
		inputValue = '';
	}
</script>

<form onsubmit={handleSubmit}>
	<label for="task-input"></label>
	<input type="text" name="task-input" id="task-input" bind:value={inputValue} />
	<button>Add</button>
</form>

<style>
</style>
