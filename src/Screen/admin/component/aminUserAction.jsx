import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from './modal'
import * as action from '../../../redux/action/adminAction'
import THeaderUser from '../function/tHeaderUser'
import TheaderBodyAdmin from './TheaderBodyAdmin'

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            line: 50,
            statusModel: this.props.listAccounts,
            groupID: 'GP01'
        }
    }

    componentDidMount = () => {
        this.props.dispatch(action.getListAccount(this.state.groupID))

    }

    handldeOnClick(){
        this.setState({
            line: this.state.line + 5
        })
    }


    render() {
        const { listAccounts } = this.props
        return (
            <div className='AddUser'>
                <table className="table">
                    <THeaderUser />
                    <TheaderBodyAdmin listAccounts={listAccounts} handldeOnClick={this.handldeOnClick.bind(this)}/>
                </table>
            
                <Modal />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listAccounts: state.adminReducer.listAccounts,
    userEdit: state.adminReducer.userEdit
})
export default connect(mapStateToProps)(AddUser)
