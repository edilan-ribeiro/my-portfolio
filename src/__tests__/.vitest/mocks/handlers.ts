import { HttpResponse, http } from 'msw'
import mockRepos from './mockData/mockRepos.json'
import mockFiles from './mockData/mockFiles.json'

export const handlers = [
	http.get('https://api.github.com/users/edilan-ribeiro/repos', () => {
		return HttpResponse.json(mockRepos, { status: 200 })
	}),

	http.get('https://api.github.com/repos/edilan-ribeiro/:repoName/contents/README.md', ({ params }) => {
		const { repoName } = params

		const getCorrectRepositories = mockFiles.find((repo) => repo.name === repoName)

		return HttpResponse.json(getCorrectRepositories)
	}),
]
