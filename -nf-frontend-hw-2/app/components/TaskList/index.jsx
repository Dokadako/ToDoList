import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
      <ul>
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))}
      </ul>
  );
};

export default TaskList;
