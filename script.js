// Initialize Supabase
const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_API_KEY = 'your-supabase-api-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_API_KEY);

// Registration
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert('Registration failed: ' + error.message);
    } else {
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    }
  });
}

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { user, session, error } = await supabase.auth.signIn({ email, password });

    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Login successful!');
      window.location.href = 'home.html';
    }
  });
}

// Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Logout failed: ' + error.message);
    } else {
      alert('Logged out successfully!');
      window.location.href = 'login.html';
    }
  });
}
