

export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=bENsSuXDsJlTfKzaJa4fwDJ5RVRYzsj6`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gif = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return gif;
  };