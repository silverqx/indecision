import React, { Component } from 'react'
import ReactModal from 'react-modal'

import Action from './Action'
import AddOption from './AddOption'
import Error from './Error'
import Header from './Header'
import ModalOption from './ModalOption'
import Options from './Options'

import { clearInputValue } from '../utils/utils'

// Make sure to bind modal to your appElement
// (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#app')

export default class IndecisionApp extends Component {
    static defaultProps = {
        title: 'Indecision List'
    }

    state = {
        error: null,
        options: [],
        selectedOption: null,
        subtitle: 'Put your life in the hands of computer'
    }

    componentDidMount() {
        let rawOptions
        let options

        try {
            rawOptions = localStorage.getItem('options')
            options = JSON.parse(rawOptions)
        } catch (e) {
            console.error(e)
        }

        if (typeof options !== 'object')
            return

        this.setState(() => ({ options }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options === this.state.options)
            return

        const options = JSON.stringify(this.state.options)
        localStorage.setItem('options', options)
    }

    /**
     * Called on form submission in AddOption Component.
     *
     * @param {string} option - Option to Add.
     *
     * @returns {?boolean} True when failed and false on success.
     */
    handleAddOption = (option) => {
        const exists = this.state.options.includes(option)
        if (exists)
            return this.handleError('This Task already exists!')
        if (!option)
            return this.handleError('Task can not be empty!')

        const options = this.state.options.concat(option)

        this.setState(() => ({ options }))

        return this.clearError()
    }

    /**
     * Called on Remove Task button click in Option Component.
     *
     * @param {string} optionToRemove - Option to Remove.
     *
     * @returns {?boolean} True when failed and false on success.
     */
    handleRemoveOption = (optionToRemove) => {
        const exists = this.state.options.includes(optionToRemove)
        if (!exists)
            return this.handleError('Any Task find with this name!')

        const options = this.state.options.filter((option) =>
            option !== optionToRemove
        )

        this.setState(() => ({ options }))

        return false
    }

    /**
     * Remove all Tasks from task list.
     *
     * @returns {?boolean} False every time.
     */
    handleRemoveAllOptions = () => {
        this.setState(() => ({ options: [] }))

        // Reset whole Application to default state
        const addOption = document.forms['add-option'].elements.option
        clearInputValue(addOption)

        return this.clearError()
    }

    /**
     * Randomly pick one item from task list and display it in modal dialog.
     */
    handlePickAction = () => {
        const listLength = this.state.options.length;
        const randomIndex = Math.floor(Math.random() * Math.floor(listLength))

        this.setState(() => ({ selectedOption: this.state.options[randomIndex] }))
    }

    /**
     * Update Error state.
     *
     * @param {string} error - Error message.
     *
     * @returns {?boolean} True every time.
     */
    handleError = (error) => {
        this.setState(() => ({ error }))

        return true
    }

    /**
     * Clear Error state.
     *
     * @returns {?boolean} False every time.
     */
    clearError = () => {
        this.setState(() => ({ error: null}))

        return false
    }

    /**
     * Reset Selected Option.
     */
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: null }))
    }

    render() {
        return (
            <div>
                <Header
                    title={this.props.title}
                    subtitle={this.state.subtitle}
                />
                <div className="container">
                    <Action
                        handlePickAction={this.handlePickAction}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            hasOptions={this.state.options.length > 0}
                            handleRemoveOption={this.handleRemoveOption}
                            handleRemoveAllOptions={this.handleRemoveAllOptions}
                        />
                        <Error error={this.state.error} />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                            handleError={this.handleError}
                        />
                    </div>
                </div>
                <ModalOption
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}
