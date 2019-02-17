import React from 'react'

const Model = props => (
    <div className="text-dark">
         <button type="button" className="btn btn-primary" data-toggle="modal" data-target={props.IDtarget}>
        {props.buttonText}
    </button>
    
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
                   {props.children}      
        </div>
        <div className="modal-footer">
                        {props.canCancel && <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>}
                        {props.canConfirm && <button type="button" className="btn btn-primary" onClick={props.canConfirm} data-dismiss="modal">{props.confirmText}</button>}
        </div>
        </div>
    </div>
    </div>
   </div>
)
export default Model;