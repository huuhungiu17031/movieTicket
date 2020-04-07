import React, { Component } from 'react'
import Iframe from 'react-iframe'
export default class TabShowMovieTrailer extends Component {
    render() {
        const { movieDetail } = this.props
        return (
            <div className="tab-pane fade" id="pills-trailer" role="tabpanel" aria-labelledby="pills-trailer-tab">
                <Iframe url={movieDetail}
                    id="myId"
                    className="myClassname"
                    display="initial"
                    addsallow="fullscreen"
                />
            </div>
        )
    }
}
