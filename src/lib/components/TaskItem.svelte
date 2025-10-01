<script lang="ts">
	import { removeTask, toggleDone, togglePriority, updateBody } from '$lib/stores/taskStore';
	import type { Task } from '$lib/types';
	import { icons } from '$lib/assets/icons';
	import { autofocus } from '$lib/actions/autofocus';

	let {
		task
	}: {
		task: Task;
	} = $props();

	let editing: boolean = $state(false);
	let editValue: string = $state('');
	$inspect(editValue);

	async function saveEdit() {
		const trimmed = editValue.trim();
		if (!trimmed) {
			alert('Task cannot be empty');
			return;
		}

		try {
			await updateBody(task.id, trimmed);
			editing = false;
		} catch (e) {
			alert(`Failed to update task:, ${e}`);
		}
	}

	function startEdit() {
		editValue = task.body;
		editing = true;
	}

	function cancelEdit() {
		editing = false;
		editValue = '';
	}
</script>

<div
	class={['item-wrap', task.done ? 'complete' : '']}
	role="listitem"
	aria-label={`Task: ${task.body}`}
>
	<label class="input-wrap">
		<input
			class="checkbox"
			type="checkbox"
			name="completed"
			checked={task.done}
			onchange={() => toggleDone(task.id)}
		/>
	</label>
	{#if !editing}
		<button class="body" onclick={startEdit}>{task.body}</button>
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
			<button
				class="btn-task trash alert"
				aria-label="Delete task"
				onclick={() => removeTask(task.id)}
			>
				<span>
					{@html icons['trash']}
				</span>
			</button>
		</div>
	{:else}
		<input
			class="body"
			type="text"
			name="task-input"
			id="task-input"
			{@attach autofocus}
			onblur={saveEdit}
			onkeydown={(e) => {
				if (e.key === 'Enter') saveEdit();
				if (e.key === 'Escape') cancelEdit();
			}}
			bind:value={editValue}
		/>
		<div class="btn-group">
			<button class="btn-task" aria-label="save" onclick={saveEdit}>
				<span>
					{@html icons['checkmark']}
				</span>
			</button>
			<button class="btn-task alert" aria-label="save" onclick={cancelEdit}>
				<span>
					{@html icons['close']}
				</span>
			</button>
		</div>
	{/if}
</div>

<style>
	.item-wrap {
		position: relative;
		display: flex;
		align-items: stretch;
		gap: 4px;
		padding: 1.25rem 1rem 1.25rem 2.25rem;
	}

	.body {
		flex-grow: 1;
		font-size: 1.25rem;
		color: var(--text01);
		cursor: text;
		text-align: left;
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

	.checkbox {
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

	.btn-task.alert {
		color: hsl(2, 100%, 66%);
	}

	.btn-task.trash {
		width: 0rem;
		transition: width 50ms ease-in-out;
	}

	.item-wrap:hover {
		.input-wrap {
			width: 1.5rem;
		}

		.checkbox {
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
