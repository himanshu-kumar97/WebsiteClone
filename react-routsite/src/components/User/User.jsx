import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 p-4'>User: {userid}</div>
  )
}

export default User