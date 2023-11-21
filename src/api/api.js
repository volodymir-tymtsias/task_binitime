const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '38bb22e10aa843279742534e99a8ad30';

// a promise resolved after a given delay
function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function request(url) {
  // for a demo purpose we emulate a delay to see if Loaders work
  return wait(300)
    .then(() => fetch(BASE_URL + url))
    .then(response => response.json());
}

export const getNews = (params) => {
  let currentParams = 'country=ua';

  if (params.country) {
    currentParams = `country=${params.country}`;
  }

  if (params.category) {
    currentParams += `&category=${params.category}`;
  }

  if (params.q) {
    currentParams += `&q=${params.q}`;
  }

  if (params.page) {
    currentParams += `&page=${params.page}`;
  }

  if (params.pageSize) {
    currentParams += `&pageSize=${params.pageSize}`;
  }

  return request(`?${currentParams}&apiKey=${API_KEY}`);
};
