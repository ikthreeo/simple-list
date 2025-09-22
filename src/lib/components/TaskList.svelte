<script lang="ts">
	import { tasks } from '$lib/stores/taskStore';
	import TaskItem from '$lib/components/TaskItem.svelte';
</script>

<ul>
	{#each $tasks as task (task.id)}
		<article>
			<TaskItem {task} />
		</article>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}

	article {
		margin-bottom: 1.5rem;
		background-color: var(--task-bg);
		color: var(--text01);
	}
</style>
