import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ [e.target.name]: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo ..."
                    onChange={this.handleChange}
                    value={this.state.title} />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }} />
            </form>
        )
    }
}

export default AddTodo
