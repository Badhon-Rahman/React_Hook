import React,{useState, useEffect} from "react";
import axios from "axios";

function DataFetch(){
    const [items, getData] = useState([]);
    const [search, handleSearch] = useState('');

    useEffect(() => {
        if(search){
            axios.get(`http://127.0.0.1:8000/api/search/${search}`)
            .then(res => {
                getData(res.data);
            })
            .catch(err => {
                return err;
            });
        }
    },[search]);
    return (
        <div>
            <label>Search: </label>
            <input type='text' name='Search' value={search} onChange={e => handleSearch(e.target.value)} />
            <ul>
                {items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}

export default DataFetch;