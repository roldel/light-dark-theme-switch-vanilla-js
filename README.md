# Minimal Light Dark Theme Switch Vanilla js
## Implementation of light/dark themes switch using vanilla js

This implementation prevents FOUC ( Flash of unstyled content ) by hidding the page body, until the theme toggler js script has been invoked and run, and the appropriate CSS attribute set

The js script will inject a light / dark toggle button in the upper right corner of the page using the absolute positon
<br>
<br>
So the only thing you have to worry about is to add the 2 following elements, on every page where you want to enable the light dark mode switch feature :

<br>
<br>
1. Add the folllowing in the page head:

```
  <link rel="stylesheet" href="shared/styles.css">**
  <style>
    body {
      display: none;
    }
  </style>
```

As such : 

```<!DOCTYPE html> 
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


2. Add the script at the bottom of the body section  :

```
... 
  <script src="shared/lightDarkModeSwitch.js"></script>
</body>
</html>
```

