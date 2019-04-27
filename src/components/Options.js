import React, { Component } from 'react'
import { Option } from './Option'

export default class Options extends Component {
    render() {
        return (
            <div>
                <div className="widget__header">
                    <div className="widget__title">Your Options</div>
                    <button
                        className="button button--link"
                        onClick={this.props.handleRemoveAllOptions}
                        disabled={!this.props.hasOptions}
                    >
                        Remove All
                    </button>
                </div>
                <div className="widget__options">
                    {
                        !this.props.hasOptions &&
                        <p className="widget__message">
                            Please add an Option.
                        </p>
                    }
                    {
                        this.props.options &&
                        this.props.options.map((option, index) =>
                            <Option
                                key={index}
                                index={index + 1}
                                option={option}
                                handleRemoveOption={this.props.handleRemoveOption}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
