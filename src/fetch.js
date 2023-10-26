export default async function fetchVideos(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4cdfd6d390msh44425b761be7277p120e01jsn5f47a669ea9a",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
