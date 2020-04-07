import React, { Component } from 'react'
import Iframe from 'react-iframe'
export default class ModalTrailer extends Component {
    handleVideo(trailer) {
        return (
            <Iframe url={trailer}
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="absolute" />
        )
    }
    render() {
        const { trailer } = this.props
        return (
            <div className="modal fade" style={{ width: '100%' }} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.handleVideo(trailer)}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
