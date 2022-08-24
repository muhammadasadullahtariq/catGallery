const getCats = async breed => {
  try {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'x-api-key',
      'live_YexvB9KAZTF7Ic71LJXfHfSGg7UKEETLUVGtyTf8fCPgOAFwmz4xFehNf3I4sZdZ',
    );

    var raw = JSON.stringify({
      amount: 100,
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=' + ${breed}&&limit=10`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
