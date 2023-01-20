import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router';
import Sayno from "../../assets/saynotodoping.png"
import "./Footer.css"

function Footer(props) {
    const history = useNavigate();
    return (
        <footer className="all_footer">
            
            <div className="doping_image">
                <img loading="lazy" src={Sayno} width="500vw"/>
            </div>

    
        <div className="home_footer" >
        
            <div>
                

                <h2><strong className="first_letter_effect">R</strong>egional Links</h2>
                <hr></hr>
                <ul className="quick_links">
                <li onClick={()=>window.open('https://www.africabsc.com/','_blank')}><a>ABSF</a></li>
                <li onClick={()=>window.open('http://www.acbs.qa/','_blank')}><a>ACBS</a></li>
                <li onClick={()=>window.open('http://www.ebsa.tv/','_blank')}><a>EBSA </a></li>
                <li onClick={()=>window.open('https://obsf.info/','_blank')}><a>OBSF </a></li>
                <li onClick={()=>window.open('https://www.pabsa.org/','_blank')}><a>PABSA</a></li>
                </ul>
            </div>

            <div>
            <h2> <strong className="first_letter_effect">O</strong>ther World Links</h2>
            <hr></hr>
            <ul className="quick_links">
                <li onClick={() => window.open('https://olympics.com/en/','_blank')}><a>Olympic Movement</a></li>
                <li onClick={() => window.open('https://www.wcbs.sport/','_blank')}><a>World Confederation of Billiards Sports</a></li>
                <li onClick={() => window.open('https://wpapool.com/','_blank')}><a>World Pool Association</a></li>
                <li onClick={() => window.open('https://www.umb-carom.org/','_blank')}><a>Union Mondiale De Billiard</a></li>
                <li onClick={() => window.open('http://www.wada-ama.org/','_blank')}><a>World Anti-Doping Agency</a></li>
            </ul>
            
            </div>
            <div>
            <h2><strong className="first_letter_effect">C</strong>ategories</h2>
            <hr></hr>
            <ul className="quick_links">
                <li onClick={()=>history.push('/category/1')}><a>World Snooker</a></li>
                <li onClick={()=>history.push('/category/2')}><a>World Billiards</a></li>
                <li onClick={()=>history.push('/category/3')}><a>World 6Reds</a></li>
                <li onClick={()=>history.push('/category/4')}><a>World Team</a></li>
                <li onClick={()=>history.push('/category/5')}><a>World U21</a></li>
                <li onClick={()=>history.push('/category/6')}><a>World U18</a></li>
                <li onClick={()=>history.push('/category/7')}><a>World U17</a></li>
                <li onClick={()=>history.push('/category/8')}><a>World U16</a></li>
                <li onClick={()=>history.push('/category/9')}><a>World Cup</a></li>
            </ul>
            </div>
            <div>
            <h2><strong className="first_letter_effect">S</strong>ocial</h2>
            <hr></hr>
            <div className="social_links">
                <MailOutlineIcon onClick={() => {window.location.href = "mailto: ibsfinfo@gmail.com "}}/>
                <FacebookIcon onClick={() => {window.open('https://www.facebook.com/groups/ibsf.media/?ref=share', '_blank')}}/>
                <InstagramIcon onClick={() =>{window.open('https://www.instagram.com/ibsf.media/?utm_medium=copy_link', '_blank')}}/>
                <TwitterIcon onClick={() =>{window.open('https://twitter.com/ibsf', '_blank')}}/>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
