export async function fetchNews(code) {
	const url = import.meta.env.DEV
		? `/api/news/${code}`
		: `/mock/${code}.json`

	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`Ошибка загрузки: ${response.status}`)
	}
	const { data } = await response.json()
	return data
}
