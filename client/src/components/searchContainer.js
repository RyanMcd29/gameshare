import React, { useState } from 'react'

//--- Updates the  'search' state variable according to the user's input ---//
const SearchContainer = () => {
    const [result, setResult] = useState({});
    const [search, setSearch] = useState('')
    
    const handleSearchChange = (e) =>
            setSearch(e.target.value)
            // console.log(search)

    
    return (
        <div>
            <input
                    onChange={handleSearchChange}
            />
        </div>
    )
        


}

export default SearchContainer;