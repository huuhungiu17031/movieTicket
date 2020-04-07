import React, { Component } from 'react'
import * as action from '../../../redux/action/adminAction'
import { connect } from 'react-redux'
class TheaderBodyAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            line: 50,
            listAcc: this.props.listAccounts
        }
    }
  componentDidUpdate(prvP,prvState){
      console.log(prvP)
      console.log(prvState)
  }
    handleDeleteUser = (infor, index) => {
        this.props.dispatch(action.removeAccount(infor, index))
    }
    handleEditUser = (infor, index) => {
        localStorage.setItem('edituser', JSON.stringify(infor))
        this.props.dispatch(action.fetchCredential(infor))
    }
    renderHTML = () => {
        let line = this.state.line
        const { listAccounts } = this.props;
        return listAccounts.map((infor, index) => {
            if (index < line) {
                return (
                    <tr key={index}>
                        <td>
                            <button
                                type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal"
                                onClick={() => { this.handleEditUser(infor, index) }}
                            >
                                <i className="fa fa-check"></i>
                            </button>
                            <button
                                type="button" className="btn btn-primary" onClick={() => { this.handleDeleteUser(infor, index) }}
                            >
                                <i className="fa fa-eraser"></i>
                            </button>
                        </td>
                        <td>
                            {infor.taiKhoan}
                        </td>
                        <td>
                            {infor.matKhau}
                        </td>
                        <td>
                            {infor.hoTen}
                        </td>
                        <td>
                            {infor.email}
                        </td>
                        <td>
                            {infor.soDt}
                        </td>
                        <td>
                            {infor.maLoaiNguoiDung}
                        </td>
                    </tr>
                )
            }
            return null
        }
        )
    }
    render() {
        return (
            <tbody>
                {this.renderHTML()}
            </tbody>
        )
    }
}

export default connect()(TheaderBodyAdmin)