import React,{useEffect,useState} from 'react';
import { Card, Button } from 'react-bootstrap';

const League = (props) => {
    const [imageUrl,setUrl]=useState('')
   
    const {idLeague, strLeague, strSport, strLeagueAlternate} = props.leagues;
    useEffect(()=>{
  
        let url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUrl(data.leagues[0].strLogo)
          console.log(data.leagues[0].strLogo)
        })
    },[])///SYNTAX AMNE NA ? ho
    return (
            <div className="row">
                <Card style={{ width: '18rem', backgroundColor: 'Grey'}}>
                    <Card.Img variant="" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{strLeague}</Card.Title>
                        <Card.Text>
                            {strSport}
                        </Card.Text>
                        <Button variant="primary">Explore</Button>
                    </Card.Body>
                </Card>
            </div>

    );
};

export default League;