import tempStr from './static/js/app';

setTimeout(function(){
  document.body.innerHTML = `${tempStr} ${new Date()}`;
},3000)
