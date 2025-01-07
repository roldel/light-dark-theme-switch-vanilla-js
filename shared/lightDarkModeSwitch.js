(function () {
    const body = document.body;
    const html = document.documentElement;
  
    // Function to apply the theme based on user preference
    const applyTheme = (theme) => {
      html.setAttribute('data-theme', theme);
      localStorage.setItem('preferredTheme', theme);
    };
  
    // Function to toggle between light and dark themes
    const toggleTheme = () => {
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      updateThemeToggleButton(newTheme);
    };
  
    // Function to update the toggle button's appearance
    const updateThemeToggleButton = (theme) => {
      const themeToggleButton = document.getElementById('themeToggleButton');
      themeToggleButton.textContent = theme === 'dark' ? '🌕' : '🌑';
    };
  
    // Initialize the theme based on saved preference or system preference
    const savedTheme =
      localStorage.getItem('preferredTheme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
  
    // Dynamically inject the theme toggle button
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id = 'themeToggleButton';
    themeToggleButton.classList.add('theme-toggle-button');
    themeToggleButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggleButton);
  
    // Update the button appearance and show the page content
    updateThemeToggleButton(savedTheme);
    window.onload = () => {
      body.style.display = 'block';
    };
  })();
  
