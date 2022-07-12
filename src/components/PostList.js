import React from 'react'
import { useApi } from '../hooks/useApi'
import SkelectonPost from './skeletons/SkelectonPost'

export default function PostList() {
  const { data: posts } = useApi('https://jsonplaceholder.typicode.com/posts')

  return (
    <div className='posts'>
      <h2>PostList</h2>
      {posts
        ? posts.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        : [1, 2, 3, 4, 5].map((n) => <SkelectonPost key={n} />)}
    </div>
  )
}
