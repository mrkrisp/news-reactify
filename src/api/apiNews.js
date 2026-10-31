import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function getNews({page_number=1, page_size=10, category}) {
	try {
		const res = await axios.get(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
				category
			}
		})
		
		return res.data
	} catch(err) {
		console.log(err.message)
	} 
}

export async function getCategories() {
	try {
		const res = await axios.get(`${BASE_URL}available/categories`, {
			params: {
				apiKey: API_KEY,
			}
		})
	
		return res.data.categories
	} catch(err) {
		console.log(err.message)
	} 
}