import React, { useState, useEffect } from 'react';
import League from '../League/League';

const LeagueLists = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data.leagues.slice(0,15))
            setLeagues(data.leagues.slice(0,15));
        })
    }, []);
    return (
        <div>
            {
                leagues.map(lg => <League leagues={lg}></League>)
            }
            
        </div>
    );
};

export default LeagueLists;