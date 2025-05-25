document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    title.addEventListener('click', () => {
        alert('¡Vamos por el doblete!');
    });
});
self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activado');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Interceptando petición a:', event.request.url);
  });