import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
export const news = {
    async getLatestNews(payload) {
        const response = await instance.get(`search?query=latest/&hitsPerPage=${payload.limit}&page=${payload.page}`);
        return response.data;
    },

    async getPopularNews(payload) {
        const response = await instance.get(`search?query=react/&hitsPerPage=${payload.limit}&page=${payload.page}`);
        return response.data;
    },
};
