import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getListMovie } from '../../../redux/action/adminAction';
import ModalMovie from './modalMovie';
import MovieHeaderBarAdmin from './movieHeaderBarAdmin';
import MovieBodyBarAdmin from './movieBodyBarAdmin';
class AdminMoviesAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'GP10'
        }
    }
    componentDidMount() {
        this.props.dispatch(getListMovie(this.state.page))
    }
    handleChangPage = () => {
        this.setState({
            page: 'GP10'
        })
    }

    render() {
        const { listMovie } = this.props;
        return (
            <div className='AddUser'>
                <div className='AddUserBar'>
                    <table className="table">
                        <MovieHeaderBarAdmin />
                        <MovieBodyBarAdmin listMovie={listMovie} />
                        <ModalMovie/>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listMovie: state.adminReducer.listMovie
})
export default connect(mapStateToProps)(AdminMoviesAction)
