import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router';
import Sayno from "../../assets/saynotodoping.png"
import Acbs from '../../assets/acbs.png'
import "./Footer.css"

function Footer(props) {
    const history = useNavigate();
    return (
        <footer className="all_footer">
            <section className='inner-footer'>

                <div className="doping_image">
                    <div className='logo'>
                        <img loading="lazy" src={Acbs} width="23%" />
                    </div>

                    <div className='doping'>
                        <img loading="lazy" src={Sayno} width="68%" />
                    </div>
                </div>


                <div className="home_footer" >

                    <div>


                        <h3>Contact Us</h3>
                        <ul className="quick_links">
                            <li onClick={() => window.open('https://www.africabsc.com/', '_blank')}><a>PO Box 8996 Rawdat AI-Khayl St, Mansoura, Doha, Qatar</a></li>
                            <li onClick={() => window.open('http://www.acbs.qa/', '_blank')}><a>ACBS</a></li>
                            <li onClick={() => window.open('http://www.ebsa.tv/', '_blank')}><a>EBSA </a></li>
                            <li onClick={() => window.open('https://obsf.info/', '_blank')}><a>OBSF </a></li>
                            <li onClick={() => window.open('https://www.pabsa.org/', '_blank')}><a>PABSA</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3> Other Links</h3>
                        <ul className="quick_links">
                            <li onClick={() => window.open('https://olympics.com/en/', '_blank')}><a>Olympic Movement</a></li>
                            <li onClick={() => window.open('https://www.wcbs.sport/', '_blank')}><a>World Confederation of Billiards Sports</a></li>
                            <li onClick={() => window.open('https://wpapool.com/', '_blank')}><a>World Pool Association</a></li>
                            <li onClick={() => window.open('https://www.umb-carom.org/', '_blank')}><a>Union Mondiale De Billiard</a></li>
                            <li onClick={() => window.open('http://www.wada-ama.org/', '_blank')}><a>World Anti-Doping Agency</a></li>
                        </ul>

                    </div>

                    <div>
                        <h3>Social links</h3>
                        <div className="social_links">
                            <MailOutlineIcon onClick={() => { window.location.href = "mailto: ibsfinfo@gmail.com " }} />
                            <FacebookIcon onClick={() => { window.open('https://www.facebook.com/groups/ibsf.media/?ref=share', '_blank') }} />
                            <InstagramIcon onClick={() => { window.open('https://www.instagram.com/ibsf.media/?utm_medium=copy_link', '_blank') }} />
                            <TwitterIcon onClick={() => { window.open('https://twitter.com/ibsf', '_blank') }} />
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
