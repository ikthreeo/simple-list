<script lang="ts">
	import { removeTask, toggleDone, togglePriority } from '$lib/stores/taskStore';
	import type { Task } from '$lib/types';
	import { icons } from '$lib/assets/icons';

	let {
		task
	}: {
		task: Task;
	} = $props();
</script>

<li class={task.done ? 'complete' : ''}>
	<label class="input-wrap">
		<input
			type="checkbox"
			name="completed"
			checked={task.done ? true : false}
			onchange={() => toggleDone(task.id)}
		/>
	</label>
	<span class="body">{task.body}</span>
	<div class="btn-group">
		<button
			class={['btn-task', task.priority]}
			aria-label="Change Priority"
			onclick={() => togglePriority(task.id)}
			><span>
				{#if task.priority === 'low'}
					{@html icons['alert']}
				{:else if task.priority === 'normal'}
					{@html icons['alert-double']}
				{:else}
					{@html icons['alert-triple']}
				{/if}
			</span>
		</button>
		<button class="btn-task trash" aria-label="Delete task" onclick={() => removeTask(task.id)}>
			<span>
				{@html icons['trash']}
			</span>
		</button>
	</div>
</li>

<style>
	li {
		position: relative;
		display: flex;
		align-items: stretch;
		gap: 4px;
		padding: 1.25rem 1rem 1.25rem 2.25rem;
	}

	.body {
		flex-grow: 1;
		font-size: 1.25rem;
	}

	.input-wrap {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 0.5rem;
		height: 100%;
		display: flex;
		align-items: center;
		background-color: var(--accent01);
		transition: width 50ms ease-in-out;
	}

	input {
		width: 0rem;
		height: 1rem;
		transition: width 30ms ease-in-out;
	}

	.complete {
		text-decoration: line-through;
	}

	.btn-group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding-left: 1rem;
	}

	.btn-task {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		padding: 0.25rem;
	}

	.btn-task span {
		display: block;
		width: 1rem;
		height: 1rem;
	}

	.btn-task.low {
		color: var(--accent02);
	}

	.btn-task.normal {
		color: hsl(55, 92%, 56%);
	}

	.btn-task.high {
		color: hsl(19, 100%, 65%);
	}

	.btn-task.trash {
		color: hsl(2, 100%, 66%);
	}

	.btn-task.trash {
		width: 0rem;
		transition: width 50ms ease-in-out;
	}

	li:hover {
		.input-wrap {
			width: 1.5rem;
		}

		input {
			width: 1rem;
		}

		.btn-task.trash {
			width: 2rem;
		}
	}

	:global(html[data-theme='light']) {
		.btn-task.normal {
			color: hsl(55, 100%, 38%);
		}
	}
</style>
