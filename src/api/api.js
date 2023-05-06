export const getLatestNews = async () => {
    const request = await fetch('https://hn.algolia.com/api/v1/search?query=latest');
    return request.json();
};
export const getPopularNews = async () => {
    const request = await fetch('https://hn.algolia.com/api/v1/search?query=react');
    return request.json();
};
