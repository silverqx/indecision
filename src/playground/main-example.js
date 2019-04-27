import React from 'react'
import ReactDOM from 'react-dom'

import Test from './components/Test'
import Counter from './components/Counter'

const title = 'In App'
const name = 'Silver'

const child1 = (
    <div>
        <h1>{title}</h1>
    </div>
)

/**
 * Submit handler.
 *
 * @param {React.SyntheticEvent} e React Event object.
 *
 * @returns {undefined}
 */
const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)
}

const mainTitle = () => {
    let tmpl = ''

    try {
        tmpl = (
            <div>
                <h1>{title}</h1>
            </div>
        )
    } catch (error) {
        console.log(error)
    }

    return tmpl
}

const form = () => {
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <input type="text" name="ccc" />
            </div>
            <input type="text" name="yyy" />
            <input type="submit" value="Ok" />
        </form>
    )
}

const template = (
    <div>
        {mainTitle()}
        <p>Name: {name}</p>
        {Test()}
        {form()}
        <Counter />
    </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
