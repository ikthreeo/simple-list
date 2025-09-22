<script lang="ts">
	import { tasks, deleteDone } from '$lib/stores/taskStore';
	import TaskItem from '$lib/components/TaskItem.svelte';
</script>

<button onclick={() => deleteDone()}>Clean List</button>

<ul>
	{#each $tasks as task (task.id)}
		<article>
			<TaskItem {task} />
		</article>
	{/each}
</ul>

<style>
</style>
