export const limitPosts = 9; //  количество постов на страницу
export const countPages = 10; //  количество страниц для пагинации

function getUrl(path, params) {
  const apiUrl = "https://jsonplaceholder.typicode.com";
  const url = `${apiUrl}${path}${params}`;
  return url;
}

export async function fetchAPI(
  path = "",
  queryParams = "",
  method = "GET",
  data = {}
) {
  const url = getUrl(path, queryParams);

  // параметры запроса
  const params = {
    method, // HTTP request method
    headers: {},
  };

  if (["PATCH"].includes(method)) {
    params.headers["Content-Type"] = "application/json";
    params.body = JSON.stringify(data);
  }

  const response = await fetch(url, params);
  const text = await response.text();
  if (!response.ok) {
    throw Error(`ошибка ${response.status} ${text}`);
  } else {
    const result = text ? JSON.parse(text) : undefined;
    return result;
  }
}
