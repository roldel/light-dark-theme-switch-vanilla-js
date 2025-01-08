# Minimal Light Dark Theme Switch Vanilla js
## Implementation of light/dark themes switch using vanilla js

This implementation prevents FOUC ( Flash of unstyled content ) by blocking the page body display, until the theme toggler js script has been invoked and run, and the appropriate CSS attribute set


https://github.com/user-attachments/assets/c8abbb1c-3ea1-4911-8a22-1e9f26763f97

<br>
<br>

The js script injects a light / dark toggle button in the upper right corner of the page using the absolute position
<br>
<br>
The only thing you have to worry about is to add the 2 following elements, on every page where you want to enable the light dark mode switch feature :

<br>

### Add the folllowing in the page head : <br>
<br>

```html
  <link rel="stylesheet" href="shared/styles.css">**
  <style>
    body {
      display: none;
    }
  </style>
```

As such : 

```html
<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="shared/styles.css">**
  <style>
    body {
      display: none;
    }
  </style>
 </head>
 <body>
```
<br>


### Add the js script reference ( and the no js fallback ) at the bottom of the body section  :

<br>

```html

<html>
  <body>

    ...   ...   ...

  <script src="shared/lightDarkModeSwitch.js"></script>

  <noscript>
    <style>
      body {
        display: block !important;
      }
    </style>
    <div style="text-align: center; padding: 1em; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">
      <p><strong>JavaScript is disabled.</strong> Please enable JavaScript to view this website properly.</p>
    </div>
</noscript>

</body>
</html>
```


### All Set !

### Feature enabled  🍾



To customize css for the dark display, we can use css variables or the [data-theme="dark"] attribute selector specifically :

```css

:root {
    --background-color: #ffffff;
    --text-color: #000000;
  }
  
  [data-theme="dark"] {
    --background-color: #000000;
    --text-color: #ffffff;
  }
  
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    font-family: Arial, sans-serif;
  }

[data-theme="dark"] p {
  color: lightgray; 
}
```



