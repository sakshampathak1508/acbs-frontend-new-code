import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from "../../axios"
import { useNavigate } from 'react-router';
import './carousel.css'
import Image from '../../assets/carouselEx.jpg'
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { MenuItem } from '@mui/material';

function ControlledCarousel() {

    const [navbar, setNavbar] = useState();
    const history = useNavigate();
    const [state, setState] = React.useState({
        year: '', search: ''
    });
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    useEffect(() => {
        axios.get("https://ibsf.info/api/news/featured/")
            .then((response) => setNavbar(response.data.data))
    }, [])


    return (
        <Carousel className="mainPage_carousel" interval={4000} indicators={false}>

            {

                // navbar && navbar.map((data, index) =>
                // (
                <Carousel.Item key={1} style={{ height: "100%", overflow: "hidden" }}>
                    <img
                        loading='lazy'
                        className="d-block w-100"
                        src={Image}
                        style={{ height: "100%", filter: "brightness(65%)" }}
                        alt="Pre Slide"
                    />


                    <Carousel.Caption onClick={() => history.push(`/news`)} className="carousel_caption">
                        {/* <span></span> */}
                        <h3>{'Darren lifts his 6th World Masters claims Silver'}</h3>
                        <div className="dropdown">
                            <button className='info'>
                                Tournament Info
                            </button>
                            <button className='groups dropbtn'>
                                <FormControl variant='standard' sx={{ m: 1, width:'100%' }}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>Links</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Without label</FormHelperText> */}
                                </FormControl>

                                {/* <label>+3</label> */}
                            </button>

                            <div className="dropdown-content">
                                <a className="" onClick={() => history.push("/aboutus")}>The IBSF</a>
                                <a className="" onClick={() => history.push("/executive_member")}>Executives</a>
                                <a className="" onClick={() => history.push("/member_countries")}>Members</a>
                                <a className="" onClick={() => history.push("/champion")}>Past Champions</a>

                            </div>

                        </div>

                    </Carousel.Caption>
                </Carousel.Item>


                // ))
            }


        </Carousel>
    );
}

export default ControlledCarousel;