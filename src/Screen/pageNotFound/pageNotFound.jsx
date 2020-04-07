import React, { Component } from 'react'

export default class PageNotFound extends Component {
    render() {
        console.log(this.props.location.pathname);
        return (
            <div className='PageNotFoundWrapper'>
                <div className='PageNotFound'>
                    <img className='icon-thinking' src="./images/icon_thinking.png" alt="icon_thinking" />
                    <h1>
                        <span>Hmmm… can't reach this page</span>
                    </h1>
                    <h5 >Try:</h5>
                    <ul>
                        <li>Checking the connection</li>
                        <li>Checking the proxy, firewall, and DNS settings.</li>
                        <li>Running Windows Network Diagnostics</li>
                    </ul>
                    <button onClick={() => {
                        window.location.reload()
                    }} className='btn btn-primary'>Refresh</button>
                </div>
            </div>
        )
    }
}
