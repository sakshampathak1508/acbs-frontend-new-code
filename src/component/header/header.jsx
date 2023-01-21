import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/acbs.png";
import "./header.css";
import Back from "../../assets/back.png";
import SearchIcon from '../../assets/searchIcon.png'
import "bootstrap/dist/css/bootstrap.css";



function myFunction() {
    var x = document.getElementsByClassName("ui")[0];
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Header({ active }) {
    const navigate = useNavigate();
    const [value, setValue] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        if (value != "") navigate.push(`/query/${value}`);
    };
    return (
        <>
            <header className='header'>
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <a class="navbar-brand" href="#">
                        <img src={LOGO} height='35px'/>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    News
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Archives
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Tournaments
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Members
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Videos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <li class="nav-link">
                            <img src={Back} />
                        </li>
                    </div>
                </nav>
                </header>
                <section className="search-bar">
                    <form id="searchForm" style={{background:'#F5F5F5'}}>  
                        <IconButton
                            onClick={handleSearch} aria-label="search">
                            <img src={SearchIcon} />
                        </IconButton>
                        <input placeholder="Search" style={{background:'#F5F5F5'}}/>
                    </form>
                </section>
        </>
    );
}

export default Header;
