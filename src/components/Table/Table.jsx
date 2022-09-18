import React, { useEffect, useState } from 'react';
import './Table.css'

const Table = ({data,searchedData}) => {
    return (
        <>

            <div className='Container'>
                <div className='main-heading'>
                    <h3>Statewise List Of Date</h3>
                </div>
                <div className='main-content'>
                    <table>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.filter((val)=>{
                                    if(searchedData===""){
                                        return val;
                                    }else if(val.state.toLowerCase().includes(searchedData.toLowerCase())){
                                        return val
                                    }
                                   }) .map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table