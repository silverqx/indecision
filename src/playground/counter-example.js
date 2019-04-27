import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Counter = class Counter extends Component {
    constructor(props) {
        super(props)

        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)

        if (isNaN(count))
            return

        this.setState(() => ({ count }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count === this.state.count)
            return

        localStorage.setItem('count', this.state.count)
    }
    handleMinusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    }
    handleAddOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    handleReset() {
        this.setState(() => ({ count: 0 }))
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick={this.handleAddOne}>+1</button>
                    <button onClick={this.handleReset}>reset</button>
                </div>
            </div>
        )
    }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<Counter />, appRoot)
