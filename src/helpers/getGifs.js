
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZbbhLIypgAB0luhuJUOBkiLkRcDLHe2j&q=${category}&limit=10`;
    const resp = await fetch(url);
    // console.log(resp.json());
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}