const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const cityOutPut = document.getElementById("cityOutPut");
const temp_real_value = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const day = document.getElementById("day");
const date = document.getElementById("date");

// date and day 
const d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

day.innerText = days[d.getDay()];
date.innerText = `${d.getDate()},${month[d.getMonth()]}`;


// search function 
const getInfo = async (event) => {
    event.preventDefault()
    let cityValue = cityName.value;
    if (cityValue === "") {
        cityOutPut.innerText = "Please Enter A Valid City Name";
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=9d046793f0de970f4787c60d74f90a28`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            cityOutPut.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_value.innerText = `${arrData[0].main.temp}`;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMOde = arrData[0].weather[0].main;
            if (tempMOde == "Clear") {
                temp_status.innerHTML = "<i class= ' fa fa-sun ' style=' color:#eccc68'>";
            } else if (tempMOde == "Clouds") {
                temp_status.innerHTML = "<i class= ' fa fa-cloud ' style=' color:#f1f2f6'>";
            }
            else if (tempMOde == "Rain") {
                temp_status.innerHTML = "<i class= ' fa fa-cloud-rain ' style=' color:#a4b0b6'>";
            }
            else {
                temp_status.innerHTML = "<i class= ' fa fa-sun ' style=' color:#eccc68'>";
            }
            datahide.classList.remove('data_hide');

        } catch (error) {
            cityOutPut.innerText = `Please Enter A Valid City Name`;
            datahide.classList.add('data_hide');
        }

    }
};
submitBtn.addEventListener('click', getInfo);


