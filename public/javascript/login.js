// logs the user in
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}
// Signs the user up
async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
          console.log('success');
          document.location.replace('/dashboard');
      }
      else {
          alert(response.statusText);
      }
  }
}

//document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.signin-form').addEventListener('submit', loginFormHandler);
