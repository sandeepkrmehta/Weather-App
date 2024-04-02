const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f28d40a0cmsh5e0dea9c062455bp1c5404jsn1d59501a9a76',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    	}
};



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))

