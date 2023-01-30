import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
    key: '33208866-b30484cdea6ad4b23b3d7b77d',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
}

export const fetchImages = async (searchQuery, page) => {
    const response = await axios.get(`?q=${searchQuery}&page=${page}`);
    return response.data;
};
    
export function needValues(data) { 
    return data.map(({ id, tags, largeImageURL, webformatURL }) => ({
        id,
        tags,
        largeImageURL,
        webformatURL,
    }));
}
       

