const getBreeds = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getBreeds;