import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Table from '../Table/Table';
import './Home.scss';


function Home() {
    const[totalCases,setTotalCases]=useState([]);
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const [searchedData, setSearchedData] = useState("")


    useEffect(()=>{
        loadData();
    },[]);

    const loadData=async()=>{
        setLoading(true);
        const res = await fetch(`https://data.covid19india.org/data.json`);
        const actualData = await res.json();
        setTotalCases(actualData.statewise.slice(0,1));
        setData(actualData.statewise.slice(1,));
        // setFilter(actualData.data);
    }

    



  return (
    <>
        <nav className='navbar'>
        <div className='logo-content'>
           <div className='navbar-logo'>CDT</div>
           <div className='navbar-title'>COVID DATA Traker</div>
        </div>
           <div className='search-box'>
              <input type="text" 
              className='input-box' 
              placeholder='Search By state Name...'  
              onChange={(e)=>{setSearchedData(e.target.value)}}
              ></input>
              <i class="fa fa-search"></i>
           </div>
        </nav>
        <Card totalCases={totalCases}/>
        <Table data={data} searchedData={searchedData} />
    </>
  )
}

export default Home