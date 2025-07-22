import React from 'react'

const RepoList = ({ repos }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Repositories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
            <h4 className="text-lg font-bold text-blue-600 break-words">{repo.name}</h4>
            {repo.description && (
              <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-500 hover:underline"
            >
              View Repo →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RepoList
