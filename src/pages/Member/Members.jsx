import React, { useEffect, useState } from 'react';
import MemberCard from "../../component/card/Member"
import Header from "../../component/header/header"
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import image2 from '../../assets/sponsor1.png'
import image1 from '../../assets/cardEx.png'
import "./Members.css"

function Members(props) {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get('https://ibsf.info/api/executives/')
            .then((res) => {
                setData(res.data.data)
                setloading(false)
            })
            .catch((e) => console.log(e))

    }, [])
    return (
        <>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Executives</title>
                
            </Helmet> */}

            <Header active="aboutus" />
            <main className="ui container" style={{  }}>
                <section className='member-heading'>
                    <h1>MEMBERS</h1>
                </section>

                <div style={{ display:'flex',gap:'1rem' , flexWrap: "wrap" }}>
                    <MemberCard data={{image : image1}} />
                    <MemberCard data={{image : image2}} />
                    <MemberCard data={{image : image1}} />
                    <MemberCard data={{image : image1}} />
                    <MemberCard data={{image : image2}} />
                </div>

                {
                    data.length != 0 ?
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {
                                data.map((data, index) => (
                                    <>
                                        <MemberCard data={data} />
                                    </>
                                ))
                            }
                        </div>
                        :
                        <>
                            {
                                loading ? <div id="loader" style={{ width: "100%", textAlign: "center" }}> <p><CircularProgress /></p> </div> :
                                    <div id="loader" style={{ width: "100%", textAlign: "center" }}> <h3>Nothing Found...</h3> </div>
                            }
                        </>
                }
            </main>
        </>

    );
}

export default Members;