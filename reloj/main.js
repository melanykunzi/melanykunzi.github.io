var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');

setInterval(function(){
    var date = new Date();

    // segundos
    var second = date.getSeconds();
    var grados = 180 + second*6;
    seconds.style.transform = 'translateX(-50%) rotate('+grados+'deg)';
    // minutos
    var minute = date.getMinutes();
    var grados = 180 + minute*6;
    minutes.style.transform = 'translateX(-50%) rotate('+grados+'deg)';
    // minutos
    var hour = date.getHours();
    if(hour>=12)
        hour = hour-12
    var grados = 180 + hour*30;
    hours.style.transform = 'translateX(-50%) rotate('+grados+'deg)';
});