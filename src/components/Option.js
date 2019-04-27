import React, { Component } from 'react'

export class Option extends Component {
    handleRemoveOption = (e) => {
        const option = e.target.parentNode.querySelector('.widget__option-value').innerText

        this.props.handleRemoveOption(option)
    }

    render() {
        return (
            <div className="widget__option">
                <div>
                    <span className="widget__option-index">{this.props.index}.</span>
                    <span className="widget__option-value">{this.props.option}</span>
                </div>
                <button
                    className="button button--link"
                    onClick={this.handleRemoveOption}
                >
                    Remove
                </button>
            </div>
        )
    }
}
