import React, { PureComponent } from 'react'
import './styles.css'
import localization from '../../Localization'

export default class Modal extends PureComponent {
  render() {
    return (
      <div className="background">
        <div className="modal">
          <h1 className="modal-header">{localization.modal_header}</h1>
          <pre className="modal-txt">{localization.modal_txt}</pre>
          <button
            className="modal-button"
            onClick={this.props.dismissModal}
          >
            {localization.accept}
          </button>
        </div>
      </div>
    )
  }
}
