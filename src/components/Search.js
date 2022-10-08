import React, { useEffect, useState } from 'react'

function Search(props) {
    const [SearchText, SetSearchText] = useState('')
    const handleInputChange = (e) => {
        SetSearchText(e.target.value);

    }
    useEffect(() => {
        props.onSearch(SearchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[SearchText])
  return (
    <div style={{textAlign: 'center'}}> 
        <input value={SearchText} onChange={handleInputChange} type='text' placeholder='Search country'/>
    </div>
  )
}

export default Search