import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addTodo(e) {
        const itemArray = this.state.item;
        if (this._input.value !== '') {
            itemArray.unshift({
                text: this._input.value,
                key: Date.now()
            });
            this.setState({
            item: itemArray
            });
            this._input.value = '';

        }
        
        e.preventDefault();
        
    }
    deleteItem(key) {
        let filteredItems = this.state.item.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            item:  filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTodo }>
                        <input
                            ref={(a) => this._input = a}
                            placeholder="Please write your to do"
                        ></input>
                        <button type="submint">OK</button>
                    </form>
                </div>
                <TodoItems
                    entries={this.state.item}
                    delete={this.deleteItem}
                />
            </div>
        );
    
    } 
}
export default TodoList;