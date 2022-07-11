function getWeather() {
    const iCity = document.querySelector("#iCity").value;

    axios.get(`https://api.weatherapi.com/v1/current.json?key=8bc67fde4eb14406974165501220607&q=${iCity}`)
        .then(function (response) {
            const data = response.data;
            console.log(data);

            let icon = data.current.condition.icon;
            icon.replace("/file// ");
            document.querySelector("#weatherPic").src = `https:${icon}`;
            document.querySelector(`#cloud`).innerHTML = `Clouds : ${data.current.cloud}`;
            document.querySelector(`#windDegree`).innerHTML = `Wind Degree : ${data.current.wind_degree}`
            document.querySelector(`#cityName`).innerHTML = ` <h2> ${data.location.name} , </h2>  `;
            document.querySelector(`#region`).innerHTML = ` <h3> ${data.location.region} , </h3>  `;
            document.querySelector(`#countryName`).innerHTML = ` <h4> ${data.location.country} . </h4> `;
            document.querySelector(`#temp`).innerHTML = ` <h3> ${data.current.temp_c} &degC <br> ${data.current.temp_f} &degF  </h3>`
            document.querySelector(`#weatherType`).innerHTML = ` <h3> ${data.current.condition.text} </h3>`
            document.querySelector(`#feelslike_c`).innerHTML = `Feelslike C : ${data.current.feelslike_c}`
            document.querySelector(`#feelslike_f`).innerHTML = `Feelslike F : ${data.current.feelslike_f}`
            document.querySelector(`#precipitations`).innerHTML = ` Precipitation : ${data.current.precip_in} % `
            document.querySelector(`#humidity`).innerHTML = ` Humidity : ${data.current.humidity} %`
            document.querySelector(`#wind`).innerHTML = ` Wind : ${data.current.wind_kph} km/h `
            document.querySelector(`#visibility`).innerHTML = ` Visibility : ${data.current.vis_km} km/h `

        })
}