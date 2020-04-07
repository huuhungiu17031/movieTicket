import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
export default class ChangeImage extends Component {
    state = {
        selectedFile: null,
        progress: 0
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],

        })
    }
    fileUploadHandler = (movie) => {
        var { selectedFile } = this.state
        var frm = new FormData();
        frm.append("File", selectedFile, selectedFile.name);
        frm.append("tenphim", movie.tenPhim);
        frm.append("manhom", movie.maNhom);
        for (var pair of frm.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        axios.post('http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim', frm, {
            onUploadProgress: ProgressEvent => {
                console.log(ProgressEvent.loaded / ProgressEvent.total * 100)
                this.setState({
                    progress: ProgressEvent.loaded / ProgressEvent.total * 100
                })
            }
        })
            .then(
                res => {
                    console.log(res)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${res.data}`,
                        showConfirmButton: true,
                        timer: 5000
                      })
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
    }
    render() {
        console.log(this.state.progress)
        var movie = JSON.parse(localStorage.getItem('movie'))
        console.log(movie)
        return (
            <div>
                <input type='file' onChange={this.fileSelectedHandler} />
                <button onClick={() => { this.fileUploadHandler(movie) }}>UPLOAD</button>
                <div className="progress">
                    <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin={0} aria-valuemax={100} style={{ width: this.state.progress + '%' }}>
                        {this.state.progress}
                    </div>
                </div>
                {/* <img src={movie.hinhAnh} width={500} height={500} alt=""/> */}

            </div >
        )
    }
}
