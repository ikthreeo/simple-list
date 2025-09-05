<script lang="ts">
	let newTask = $state('');
	let {
		addTask
	}: {
		addTask: (newTask: string) => void;
	} = $props();

	function formSubmitted(e: SubmitEvent) {
		e.preventDefault();
	}
</script>

<form onsubmit={formSubmitted}>
	<label for="task-input"></label>
	<input type="text" name="task-input" id="task-input" bind:value={newTask} />
	<button>Add</button>
</form>

<style>
</style>
