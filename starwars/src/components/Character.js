import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharCard from './CharCard';

function Character() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,11,21,31,41,51,61,71,81,91,101,111,121,131,141,151,161,171,181,191,201,211,221,231,241,251,261,271,281,291,301,311,321,331,341,351,361,371,381,391,401,411,421,431,441,451,461,471,481,491,501,511,521,531,541,551,561,571,581,591,601")
        .then((response) => {
            console.log(response)
            setData(response.data)
        })
    }, []);

    return (
        <div>
         {data.map((item) => {
             return <CharCard
                img={item.image}
                name={item.name}
                species={item.species}
                gender={item.gender}
                origin={item.origin.name}
                location={item.location.name}
            />
        })}
        </div>
    )
};

export default Character;