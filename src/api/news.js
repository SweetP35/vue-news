export async function fetchNews(code) {
	const url = import.meta.env.DEV
		? `/api/news/${code}`
		: `${import.meta.env.BASE_URL}mock/${code}.json`

	const response = await fetch(url)
	const isJson = response.headers.get('content-type')?.includes('json')

	if (!response.ok || !isJson) {
		throw new Error('Эта новость недоступна в демо-версии')
	}

	const { data } = await response.json()
	return data
}
