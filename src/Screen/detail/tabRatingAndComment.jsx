import React, { Component } from 'react'
import Swal from 'sweetalert2'

export default class TabRatingAndComment extends Component {
    renderRating = (rating) => {
        const star = []
        for (var i = 0; i < rating; i++) {
            star.push(<i key={i} className='fa fa-star' style={{ color: 'yellow' }}></i>)
        }
        return star
    }
    handleOnClick(){
        // const {moviesDetail}=this.props
        Swal.fire({
            title:`wqdqwd`,
            input: 'text',
            inputPlaceholder:'Nói cho mọi người biết bạn nghĩ gì về phim này ....',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
              return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                  if (!response.ok) {
                    throw new Error(response.statusText)
                  }
                  return response.json()
                })
                .catch(error => {
                  Swal.showValidationMessage(
                    `Request failed: ${error}`
                  )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
              })
            }
          })
    }
    render() {
        const { moviesDetail } = this.props
        return (
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className='commentAndRating_Wrapper'>
                    <div className='commentAndRating'>
                        <div>
                            <button className='btn btn-light' onClick={() => {
                            this.handleOnClick()
                            }}>Bạn nghĩ gì về phim này ?</button>
                        </div>
                        <div>
                            {this.renderRating(moviesDetail)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
