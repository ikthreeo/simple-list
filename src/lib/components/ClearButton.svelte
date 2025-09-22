<script lang="ts">
	import { tasks, deleteDone } from '$lib/stores/taskStore';
</script>

<div class="clear">
	{#if $tasks.some((t) => t.done)}
		<hr class="h-line" />
		<button class="btn-clear" onclick={() => deleteDone()}>Clear</button>
	{/if}
</div>

<style>
	.clear {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 1.5rem;
		gap: 1rem;
	}

	.h-line {
		height: 1px;
		flex-grow: 1;
		border: none;
		background: linear-gradient(90deg, rgba(254, 248, 170, 0.6) 0%, rgba(254, 248, 170, 0.9) 100%);
	}

	:global(html[data-theme='light']) .h-line {
		background: linear-gradient(90deg, rgba(13, 17, 79, 0.2) 0%, rgba(13, 17, 79, 0.6) 100%);
	}

	.btn-clear {
		font-size: 0.875rem;
		color: var(--text01);
	}
</style>
