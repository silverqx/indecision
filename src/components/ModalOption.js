import React from 'react'
import ReactModal from 'react-modal'

const ModalOption = (props) => (
    <ReactModal
        contentLabel='What should I do?'
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        <p className="modal__body">
            <span>{props.selectedOption}</span>
        </p>
        <div>
            <button
                onClick={props.handleClearSelectedOption}
                className="button"
            >
                OK
            </button>
        </div>
    </ReactModal>
)

export default ModalOption
