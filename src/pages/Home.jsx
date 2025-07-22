import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProfileCard from '../components/ProfileCard'
import RepoList from '../components/RepoList'
import axios from 'axios'

const Home = () => {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  // Clear previous localStorage on first load
  useEffect(() => {
    localStorage.clear()
  }, [])

  const handleSearch = async (username) => {
    try {
      const userRes = await axios.get(`https://api.github.com/users/${username}`)
      const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`)
      setUserData(userRes.data)
      setRepos(repoRes.data)
      setHasSearched(true)

      localStorage.setItem('userData', JSON.stringify(userRes.data))
      localStorage.setItem('repos', JSON.stringify(repoRes.data))
      localStorage.setItem('hasSearched', 'true')
    } catch (error) {
      alert('User not found!')
      setUserData(null)
      setRepos([])
      setHasSearched(false)
      localStorage.clear()
    }
  }

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {hasSearched && userData && <ProfileCard user={userData} />}
      {hasSearched && repos.length > 0 && <RepoList repos={repos} />}
    </div>
  )
}

export default Home
