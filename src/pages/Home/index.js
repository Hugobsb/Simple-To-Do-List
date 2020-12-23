import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Creators as TodoActions } from '../../store/ducks/todos';

import Task from '../../components/Task';

import './style.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        const { todos, addTodo, toggleTodo, removeTodo } = this.props;
        
        return (
            <section id="home">
                <h1>To-do list</h1>
                <input type="text" placeholder="Do the laundry" onChange={e => this.setState({ text: e.target.value })} />
                <button type="button" onClick={() => addTodo(this.state.text)}>Insert</button>
                {
                    todos.map(todo => (
                        <Task
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                            complete = {todo.complete}
                        />
                    ))
                }
            </section>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(TodoActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);