<script lang="ts">
	import { addTask } from '$lib/stores/taskStore';
	import { onMount } from 'svelte';

	let inputValue = $state<string>('');

	function handleSubmit(e: SubmitEvent) {
		if (inputValue) {
			e.preventDefault();
			addTask(inputValue);
			inputValue = '';
		} else {
			return false;
		}
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
	<input
		type="text"
		name="task-input"
		id="task-input"
		placeholder="New Task"
		bind:value={inputValue}
	/>
	<button disabled={inputValue ? false : true}>+</button>
</form>

<style>
	form {
		position: relative;
		display: flex;
		align-items: stretch;
		font-size: 1.25rem;
		background-color: var(--task-bg);
		border: 0px solid transparent;
		border-width: 1px 1px 1px 0.5rem;
		transition: border 150ms ease-in-out;

		input {
			flex-grow: 1;
			height: 100%;
			padding: 1.25rem 1rem 1.25rem 2.25rem;
			color: var(--text01);
			background-color: transparent;
			border: none;
			opacity: 0.5;
		}

		button {
			width: 6rem;
			color: var(--text01);
			opacity: 1;
		}

		button:disabled {
			opacity: 0.5;
			cursor: default;
		}

		&:hover {
			border-color: var(--accent02);
		}

		&:focus-within {
			color: var(--text01);
			border-color: var(--accent01);

			input:focus {
				border: none;
				outline: none;
				opacity: 1;
			}
		}
	}
</style>
