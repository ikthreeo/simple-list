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
