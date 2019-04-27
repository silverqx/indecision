import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            count: 0
        }
    }
    handleClick() {
        // this.setState({
        //     count: 0
        // })
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }, 1)
        // this.setState((prevState) => {
        //     return {
        //         count: 0
        //     }
        // })
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <div>
                    <button onClick={this.handleClick}>+1</button>
                </div>
            </div>
        )
    }
}
