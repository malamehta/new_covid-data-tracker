import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";
import './Card.scss';


const Card = ({ totalCases }) => {
    return (
        <>
            <div className='container'>
                {
                    totalCases.map((curElem, ind) => {
                        return (
                            <>
                                <div className='card-box'>
                                    <div className='card-title'>Total Confirmed</div>
                                    <div>
                                    <img src='assets/images/confirmed-img.png' style={{width:"60px"}}></img>
                                    </div>
                                    <div className='counterup'>
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={curElem.confirmed}
                                            duration={3}
                                            separator=","
                                        />
                                    </div>
                                </div>
                                <div className='card-box'>
                                    <div className='card-title'>Total Active</div>
                                    <div>
                                        <img src='assets/images/active-img.jpg'></img>
                                    </div>
                                    <div className='counterup'>
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={curElem.active}
                                            duration={3}
                                            separator=","
                                        />
                                    </div>
                                </div>

                                <div className='card-box'>
                                    <div className='card-title'>Total Recovered</div>
                                    <div>
                                    <img src='assets/images/recovered-img.png'></img>
                                    </div>
                                    <div className='counterup'>
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={curElem.recovered}
                                            duration={3}
                                            separator=","
                                        />
                                    </div>
                                </div>

                                <div className='card-box'>
                                    <div className='card-title'>Total Death</div>
                                    <div>
                                    <img src='assets/images/death-img.png'></img>
                                    </div>
                                    <div className='counterup'>
                                        <CountUp
                                            className='count'
                                            start={0}
                                            end={curElem.deaths}
                                            duration={3}
                                            separator=","
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


            </div>
        </>
    )
}

export default Card