async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-body').value.trim();
    const roomId = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const userId = document.querySelector('#user_id').value
  
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            roomId,
            comment_text,
            userId
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
    }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);