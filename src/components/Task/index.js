import React from 'react';

import './style.css';

class Task extends React.Component {
    render() {
        const {
            text = 'Tarefa',
            toggleTodo = () => {},
            removeTodo = () => {},
            complete = false,
            id = ''
        } = this.props;

        return (
            <div className="task-item" style={{ backgroundColor: complete ? '#90ee90' : '#ff6347' }}>
                <span>{text}</span>
                <div className="task-item-controllers">
                    <button type="button" onClick={() => toggleTodo(id)}>{ complete ? 'Cancel' : 'Done' }</button>
                    <button type="button" onClick={() => removeTodo(id)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Task