import React from 'react';
import './ServicePage.js';

export default function ServicePage({ history }) {

    const handleSignOut = e => {
        e.preventDefault()
        sessionStorage.removeItem('authToken')
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.clear()
        history.push('/')
    }

    const handleBookAgainIcon = e => {
        e.preventDefault()
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.clear()
        history.push('/routes')
    }
    const myStyle = {
        // backgroundImage:  {bgimg},        
        fontSize: '25px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>

            <div className="container">
                <div>
                    <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                        <a href="/#" className="navbar-brand Company-Log">OLLEC AIRLINES</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                            <ul className="navbar-nav ml-auto nav-flex-icons ic">
                                <li className="nav-item">
                                    <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleBookAgainIcon(e)} style={{ color: "rgb(44, 237, 224)" }}>Book Again</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleSignOut(e)}>Sign-Out</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div >

                    <iframe src="https://media.giphy.com/media/kTM3xExdje52g/giphy.gif?cid=790b7611x2j3eq3r9lj1cj9pmhbiljh5esp73imipt8yla83&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="1000" height="1000px" title='bye-bye page' frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>

            </div>
        </div>
    )
}