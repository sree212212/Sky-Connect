
// import React, { useState } from 'react'
// import { FaAngleDoubleDown } from "react-icons/fa";

// import './customerservice.css'
// export default class App extends React.Component {

//     moveToCusPage = e => {
//         e.preventDefault()
//         window.location.href = '/ServicePage'
//     }

//     render() {
//         return (

//             <div className="row">

//                 <div className="column3" >
//                     <div className="seatInfo">
//                         <p class="new">SWADESHI AIRLINES</p>
//                         <center>
//                             <div className="cen">
//                                 <form >
//                                     <br />
//                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className='t'>Name: &nbsp;&nbsp;&nbsp;</label>
//                                     <input type="text" name="name" id="d" required />
//                                     <br />
//                                     <label className='t'>Email-Id : &nbsp;&nbsp;&nbsp;</label>
//                                     <input type="email" name="usr_email" id="d" required />
//                                     <br /><br />
//                                     <a href><label className='bo'>FEEDBACK</label> <br></br></a>
//                                     <textarea name="message"></textarea>
//                                     <br /><br />
//                                     <p className='ne'>RATING</p>

//                                     <center>
//                                         <div class="form-check form-check-inline">
//                                             <input class="form-check-input" type="radio" name="rating" id="1" value="1" className="cen" />
//                                             <label class="form-check-label" htmlfor="male">1</label>
//                                         </div>
//                                         <div class="form-check form-check-inline">
//                                             <input class="form-check-input" type="radio" name="rating" id="2" value="2" />
//                                             <label class="form-check-label" htmlFor="female">2</label>
//                                         </div>
//                                         <div class="form-check form-check-inline">
//                                             <input class="form-check-input" type="radio" name="rating" id="3" value="3" />
//                                             <label class="form-check-label" htmlFor="female">3</label>
//                                         </div>
//                                         <div class="form-check form-check-inline">
//                                             <input class="form-check-input" type="radio" name="rating" id="4" value="4" />
//                                             <label class="form-check-label" htmlFor="female">4</label>
//                                         </div>
//                                         <div class="form-check form-check-inline">
//                                             <input class="form-check-input" type="radio" name="rating" id="5" value="5" />
//                                             <label class="form-check-label" htmlFor="female">5</label>
//                                         </div>
//                                     </center>
//                                     <br /><br />
//                                     <button type="submit" className="myform-btn" class="bt" onClick={e => this.moveToCusPage(e)}><center>submit</center></button> &nbsp;&nbsp;
//                                     <button type="reset" className="myform-btn" class="bt1" value="clear"><center>clear</center></button>
//                                 </form>

//                             </div>
//                             <br /><br />


//                             <br />
//                             <center>
//                                 <br />
//                                 <p class="te">EMAIL: swadesiairlines@gmail.com</p>
//                                 <p class="te">CONTACT NUMBER: 9677934637</p>
//                                 <p class="te">ADDRESS:91-Z/19,DELHI,110001 </p>
//                             </center>
//                         </center>
//                         <br /><br />
//                         <p className='bo'>If you need any information send mail</p>

//                         <a href="mailto:harishramaraj13@gmail.com" className='bo'>Report via mail</a><br></br>


//                     </div>
//                 </div>

//             </div>


//         )

//     }
// }

// ariga
import React from 'react';
//import { FaAngleDoubleDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

import './customerservice.css';

export default class App extends React.Component {
    state = {
        rating: 0
    };

    moveToCusPage = e => {
        e.preventDefault();
        window.location.href = '/ServicePage';
    };

    ratingChanged = newRating => {
        this.setState({ rating: newRating });
    };

    render() {
        return (
            <div className="row">
                <div className="column3">
                    <div className="seatInfo">
                        <p className="new">OLLEC AIRLINES</p>
                        <center>
                            <div className="cen">
                                <form>
                                    <br />
                                    <label className='t'>Name: &nbsp;&nbsp;&nbsp;</label>
                                    <input type="text" name="name" id="d" required />

                                    <label className='t'>Email-Id : &nbsp;&nbsp;&nbsp;</label>
                                    <input type="email" name="usr_email" id="d" required />
                                    <br /><br />
                                    <a href><label className='bo'>FEEDBACK</label> <br /></a>
                                    <textarea name="message"></textarea>
                                    <br /><br />
                                    <p className='ne'>RATE US</p>

                                    <center className='poo'>
                                        <ReactStars
                                            count={5}
                                            onChange={this.ratingChanged}
                                            size={24}

                                            activeColor="#ffd700"
                                        />
                                    </center>

                                    <button type="submit" className="myform-btn bt" onClick={e => this.moveToCusPage(e)}>
                                        <center>Submit</center>
                                    </button>
                                    &nbsp;&nbsp;
                                    <button type="reset" className="myform-btn bt1" value="clear">
                                        <center>Clear</center>
                                    </button>
                                </form>
                            </div>



                            <center>

                                <p className="te">EMAIL: ollecairlines@gmail.com</p>
                                <p className="te">CONTACT NUMBER: 6303852752</p>
                                <p className="te">ADDRESS: IIT GUWAHATI, Assam, 781039 </p>
                            </center>
                        </center>

                        <p className='bo'>If you need any information send mail</p>

                        <a href="mailto:hanumasaikrishna21@gmail.com" className='bo'>Report via mail</a><br />
                    </div>
                </div>
            </div>
        );
    }
}