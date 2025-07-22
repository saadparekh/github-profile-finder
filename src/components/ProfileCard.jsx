import React from 'react'

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6 text-center max-w-xl mx-auto">
      <img
        src={user.avatar_url}
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-xl font-semibold mb-1">{user.name || user.login}</h2>
      <p className="text-gray-600 mb-3">@{user.login}</p>

      <div className="flex justify-center gap-6 text-sm mb-3">
        <div>
          <span className="font-semibold">{user.followers}</span><br />Followers
        </div>
        <div>
          <span className="font-semibold">{user.following}</span><br />Following
        </div>
        <div>
          <span className="font-semibold">{user.public_repos}</span><br />Repos
        </div>
      </div>

      {user.bio && <p className="text-gray-700 italic">"{user.bio}"</p>}
    </div>
  )
}

export default ProfileCard
