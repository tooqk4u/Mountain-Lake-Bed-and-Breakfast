async function bookingFormHandler(event) {
    event.preventDefault();

    const checkIn = document.querySelector('#start_date').value.trim();
    const checkOut = document.querySelector('#end_date').value.trim();

    console.log(checkIn, checkOut);

    const response = await fetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify({
            checkIn,
            checkOut
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

document.querySelector('#booking-date').addEventListener('submit', bookingFormHandler)