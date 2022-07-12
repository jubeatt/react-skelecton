import { useEffect, useState } from 'react'
import PostList from './components/PostList'
import Profile from './components/Profile'

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      <div className='header'>
        <div className='container'>
          <h1>React Skeletons</h1>
          <button onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}>
            Switch
          </button>
        </div>
      </div>
      <div className='content'>
        <div className='container'>
          <PostList />
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default App
