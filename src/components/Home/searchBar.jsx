import React, { Component } from 'react';
import { connect } from 'react-redux';
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenPhim: '',
            maNhom: ''
        }
    }
    renderHTML = (type) => {
        const { filmDatas } = this.props
        return filmDatas.map((infor) => {
            switch (type) {
                case 'tenPhim': {
                    return <option className='text-capitalize' key={infor.maPhim}>{infor.tenPhim}</option>
                }
                case 'ngayChieu': {
                    return <option key={infor.maPhim}>{new Date(infor.ngayKhoiChieu).toLocaleDateString()}</option>
                }
                case 'gioChieu': {
                    return <option key={infor.maPhim}>{new Date(infor.ngayKhoiChieu).toLocaleTimeString()}</option>
                }
                default: {
                    return {
                        ...this.state
                    }
                }
            }

        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state.tenPhim)

    }
    handleInputChange = (event) => {
        let { value, name } = event.target;
        event.preventDefault()
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    render() {
        return (
            <div className='container my-2 '>
                <div className='searchBarWrapper'>
                    <form className='form-row' onSubmit={this.handleSubmit}  >
                        <div className='form-group'>
                            <select type="text" className='searchBySelecting movieSearch' name='tenPhim' onChange={this.handleInputChange}  >
                                Tên phim (mã Rạp)
                                    {this.renderHTML('tenPhim')}
                            </select>
                        </div>
                        <div className='form-group'>
                            <select type="text" className='searchBySelecting cinemaSearch' placeholder='Rạp' >
                                <option>
                                    CGV
                                </option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <select type="text" className='searchBySelecting initialRelease' name='ngayKhoiChieu' placeholder='Ngày chiếu' >
                                {this.renderHTML('ngayChieu')}
                            </select>
                        </div>
                        <div className='form-group'>
                            <select type="text" className='searchBySelecting showingTime' name='' placeholder='Suất chiếu' >
                               
                                    {this.renderHTML('gioChieu')}
                               
                            </select>
                        </div>
                        <div className='form-group'>
                            <button
                                type='submit'
                                className='btn btn-secondary'>
                                MUA VÉ NGAY
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    filmDatas: state.filmDatas.films
})
export default connect(mapStateToProps)(SearchBar)