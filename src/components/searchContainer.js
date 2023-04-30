import React, { useEffect, useState } from 'react'
import API from '../utils/API'

const SearchContainer = () => {
    const [result, setResult] = useState({});
    const [search, setSearch] = useState('')
    
    const handleSearchChange = (e) =>
            setSearch(e.target.value)
            console.log(search)

    // setGameResults([])
    //     API.search(search)
    //         .then((res) => setResult(res.data)
    //         .catch((err) => console.log(err)))
    //         console.log(result);
        
    
    return (
        <div>
            <input
                    onChange={handleSearchChange}
            />
        </div>
    )
        


}

export default SearchContainer;