const BASE_URL = 'https://pixabay.com/api';
const KEY = '33208866-b30484cdea6ad4b23b3d7b77d';
const FILTER = '&image_type=photo&orientation=horizontal&per_page12';

function fetchImages(nextName, page) {
    
    return fetch(`${BASE_URL}?q=${nextName}&page=${page}$key=${KEY}${FILTER}
    `,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
    });
           
}
const api = {fetchImages};
export default api;


