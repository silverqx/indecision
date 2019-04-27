import React, { Component } from 'react'

import { clearInputValue } from '../utils/utils'

export default class AddOption extends Component {
    /**
     * Called on form submission.
     *
     * @param {React.SyntheticEvent} e - React SyntheticEvent Object.
     */
    handleAddOption = (e) => {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const failed = this.props.handleAddOption(option)

        if (failed)
            return

        clearInputValue(e.target.elements.option)
    }

    /**
     * Called on Key Up on a Add Option element.
     *
     * @param {React.KeyboardEvent} e - React SyntheticEvent Object.
     */
    handleKeyUp = (e) => {
        if (e.key === 'Escape')
            clearInputValue(e.target)
    }

    render() {
        return (
            <div>
                <form
                    className="add-option"
                    onSubmit={this.handleAddOption}
                    name="add-option"
                >
                    <input
                        className="add-option__option"
                        name="option"
                        type="text"
                        autoFocus
                        onKeyUp={this.handleKeyUp}
                        placeholder="Insert new Option..."
                        autoFocus
                    />
                    <input
                        className="button"
                        type="submit"
                        value="Add Option"
                    />
                </form>
            </div>
        )
    }
}
