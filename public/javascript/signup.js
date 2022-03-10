async function signupFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
        const response = await fetch('/api/users/', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
            document.location.replace('/');
        }
        else {
            alert(response.statusText);
        }
    }
  }
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);