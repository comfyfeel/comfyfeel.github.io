function video()
{
var random = Math.floor(Math.random() * 100) // random number between 0 and *
var iframe = document.getElementById('playlist')
iframe.setAttribute('src', iframe.getAttribute('src').replace(/index=\d+/, 'index='+random))
}

var totalCount = 27;
function ChangeIt()
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/'+num+'.jpg';
document.body.style.backgroundSize = "cover";// Background repeat
}

