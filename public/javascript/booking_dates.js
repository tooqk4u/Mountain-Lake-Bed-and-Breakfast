async function bookingFormHandler(event) {
    event.preventDefault();

    const start_date = document.querySelector('#start_date').value.trim();
    const end_date = document.querySelector('#end_date').value.trim();
    const room_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ]; 

    console.log(start_date, end_date, room_id);

    const response = await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify({
            start_date,
            end_date,
            room_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

document.querySelector('#booking-date').addEventListener('submit', bookingFormHandler)