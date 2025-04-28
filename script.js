function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flaps = document.querySelectorAll('.flap');
  
    // Add open class to trigger animation
    envelope.classList.add('open');
  
    // After animation, fade out and hide flaps
    setTimeout(() => {
      flaps.forEach(flap => {
        flap.classList.add('fade-out');
        setTimeout(() => {
          flap.style.display = 'none';
        }, 500); // Wait for fade out to complete
      });
    }, 1000); // Matches the flap open animation
  }
  
  // RSVP button alert
  const rsvpBtn = document.getElementById('rsvpBtn');
  rsvpBtn.addEventListener('click', () => {
    alert('Thank you! We’ll be happy to see you, In Shaa Allah!');
  });
  