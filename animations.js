document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('.animation-container');
  
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
      
        const randomX = Math.random() * window.innerWidth;
        snowflake.style.left = randomX + 'px';
      
        body.appendChild(snowflake);
      
        setTimeout(() => {
            snowflake.remove();
        }, 6000); 
    }
    setInterval(createSnowflake, 70);
});