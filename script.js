

// This will run when the .click-me element is clicked




document.addEventListener("DOMContentLoaded", function (event){
    document.getElementsByClassName('menu_item')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item1')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item2')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item3')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item4')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    
    document.getElementsByClassName('menu_item01')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item02')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item03')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item04')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item05')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    
    });
    document.getElementsByClassName('menu_item06')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item07')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item08')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item09')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
    document.getElementsByClassName('menu_item010')[0].addEventListener('click', function (event) {
        document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
    });
});


//http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={1af1fd3e6511b102b6aef3f72cf512ef}



    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

    function getWeather(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let API_KEY = '490fd4018b707bb5309ea9320587eb4a';
        let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

        $.get(baseURL,function(res){
            let data = res.current;
            let temp = Math.floor(data.temp - 273);
            let condition = data.weather[0].description;
            $(".bubblingG").hide();
            $('#temp-main').html(`${temp}°`);
            $('#condition').html(condition);
        })
        
    }

    getLocation();

//animation


    
    







