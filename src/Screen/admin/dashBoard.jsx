import React, { Component } from 'react'
import AddUser from './component/aminUserAction'
import AdminMoviesAction from './component/adminMoviesAction'
import { ADD_USER, ADD_MOVIE, CHANGE_IMAGE } from '../../redux/constants/constants'
import FunctionUserBar from './function/functionUserBar'
import ChangeImage from './component/changeImage'
export default class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: <AddUser/>,
            data:''
        }
    }
    handleOnClick = (data) => {
        switch (data) {
            case ADD_USER:
                this.setState({
                    content: <AddUser />,
                    data:ADD_USER
                })
                break;
            case ADD_MOVIE:
                this.setState({
                    content: <AdminMoviesAction />,
                    data:ADD_MOVIE
                })
                break;
            case CHANGE_IMAGE:
                this.setState({
                    content: <ChangeImage />
                })
                break;
            default:
                return this.state.content
        }
    }
    render() {
        return (
            <div className='dashBoard-Wrapper '>
               
                <div className='dashBoardElement'>

                    <div className="adminAction">
                        <ul>
                            <li>
                                <div onClick={() => { this.handleOnClick(ADD_USER) }} className='adminAction-detail'>
                                    <i className="fa fa-user" ></i>
                                    <h5>Account</h5>
                                </div>
                            </li>
                            <li>
                                <div onClick={() => { this.handleOnClick(ADD_MOVIE) }} className='adminAction-detail'>
                                    <i className="fa fa-film"></i>
                                    <h5>Movie</h5>
                                </div>
                            </li>
                            <li>
                                <div onClick={() => { this.handleOnClick(CHANGE_IMAGE)}} className='adminAction-detail'>
                                    <i className="fa fa-film"></i>
                                    <h5>UploadImage</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='adminActionContent-wrapper'>
                        <div className='adminActionContent'>
                            <div><FunctionUserBar action={this.state.data}/></div>
                            {this.state.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
