import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github Followers: {data.followers}</div>
  )
}

export default Github