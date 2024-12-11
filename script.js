async function getData() {
    const city = search.value; // Assuming `search` is a valid input element
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9ec2ba15admsh85ef9f9859f75b1p151e21jsn2035f767f866',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON
        console.log("Full Data:", result);
        const cel = (result.main.temp -32)*5/9;
        const rounded = cel.toFixed(2);
        temp.innerHTML = rounded;
        hd.innerHTML = result.main.humidity;
        ws.innerHTML = result.wind.speed;
        p.innerHTML = result.main.pressure;
        sl.innerHTML = result.main.sea_level;
        gl.innerHTML = result.main.grnd_level;
        cl.innerHTML = result.clouds.all;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
