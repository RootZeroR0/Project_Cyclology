import React from 'react'
import propTypes from 'prop-types'

export default function header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <a className="navbar-brand" href="#" > {props.title} </a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation" >

                <span className="navbar-toggler-icon" > </span>
            </button>
            <div className="collapse navbar-collapse"
                id="navbarColor01" >

                <ul className="navbar-nav mr-auto" >
                    <li><img src='assets/img/img4.jpg'height={40}></img></li>

                    <li><a className="nav-link nav-item active font-weight-bold" href="#">S<span className='text-danger'>tr</span>ava</a ></li>

                    <li className="nav-item active" >
                        <a className="nav-link"
                            href="#" > Home <span className="sr-only" > (current) </span></a >
                    </li>
                    <li className="nav-item active" >
                        <a className="nav-link"
                            href="#" > Events </a>
                    </li>
                    <li className="nav-item active" >

                        <a className="nav-link"
                            href="#" > About </a>
                    </li>
                    <li className="nav-item active" >
                        <a className="nav-link"
                            href="#" > Contact </a>
                    </li>
                </ul> 
                <ul className='float-right navbar-nav'>
                <li className=""><img src='assets/img/user.png' height={40}></img></li>
                <li className="nav-item active" ><a className="nav-link"href="#" > Sign In </a></li>
                </ul>
                
            </div>
        </nav>             
    )
}