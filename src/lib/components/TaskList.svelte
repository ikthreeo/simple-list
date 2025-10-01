<script lang="ts">
	import { tasks } from '$lib/stores/taskStore';
	import TaskItem from '$lib/components/TaskItem.svelte';
</script>

<ul role="list">
	{#each $tasks as task (task.id)}
		<li aria-label={`Task: ${task.body}`}>
			<TaskItem {task} />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		list-style-type: none;
	}

	li {
		margin-bottom: 1.5rem;
		background-color: var(--task-bg);
		color: var(--text01);
	}
</style>
