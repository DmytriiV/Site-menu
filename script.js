

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



    function GeolocationgetCurrentPosition(){
        console.log('TEST')
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition;
        }else{
            alert("Geolocation not supported by this browser");
        }   
    }
    







