async function bookingFormHandler(event) {
    event.preventDefault();

    const start_date = document.querySelector('#start_date').value.trim();
    const end_date = document.querySelector('#end_date').value.trim();
    const roomId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const userId = document.querySelector('#user_id').value

    console.log(start_date, end_date, roomId, userId);

    const response = await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify({
            start_date,
            end_date,
            roomId,
            userId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

document.querySelector('#booking-date').addEventListener('submit', bookingFormHandler)