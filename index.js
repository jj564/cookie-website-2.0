document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('confirm-button');
    const cookieInput = document.getElementById('cookies-input');
    const cookieGifContainer = document.getElementById('cookie-gif-container');
    const cookieGif = document.querySelector('.cookie-gif');
    const calorieCountDisplay = document.getElementById('calorie-count');
    const audio = document.getElementById('audio-background');
    const playButton = document.getElementById('play-button');
    

    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
      } else {
        audio.pause();
        playButton.textContent = 'Play';
      }
    });

    
  
    confirmButton.addEventListener('click', function() {
  
      const numberOfCookies = parseFloat(cookieInput.value);
  

      if (!isNaN(numberOfCookies) && numberOfCookies > 0) {
   
        const durationInSeconds = numberOfCookies / 2 * 1000;
  
   
        cookieGifContainer.style.display = 'block';
  
      
        cookieGif.style.display = 'none';
  
     
        cookieGif.src = cookieGif.src; 
  
      
        cookieGif.style.display = 'block';
  
     
        setTimeout(function() {
     
          cookieGifContainer.style.display = 'none';
          
      
          const calorieCount = numberOfCookies * 488;
  
      
          calorieCountDisplay.textContent = `Calories: ${calorieCount}`;
          calorieCountDisplay.style.display = 'block';
        }, durationInSeconds);
      } else {
        alert('Please enter a valid number of cookies.');
      }
    });
  });
  