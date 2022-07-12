import React from 'react'
import { useApi } from '../hooks/useApi'
import SkelectonProfile from './skeletons/SkelectonProfile'

export default function Profile() {
  const { data: user } = useApi('https://jsonplaceholder.typicode.com/users/1')

  return (
    <div className='profile'>
      <h2>Profile</h2>
      {user ? (
        <div>
          <h4>{user.username}</h4>
          <p>{user.email}</p>
          <a href={user.website}>{user.website}</a>
        </div>
      ) : (
        <SkelectonProfile />
      )}
    </div>
  )
}
