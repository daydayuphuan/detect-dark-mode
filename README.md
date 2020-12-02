# detect-dark-mode

## use

```js
import DetectDarkMode from 'detect-dark-mode';
// get
const isDarkMode = DetectDarkMode.isDark;
// set listen change callback.
DetectDarkMode.onChange = (isDark) => {
  // DO SOMETHING.
};
// listen change.
const removeListener = DetectDarkMode.listenChange();
```

## use css

```css
/* 操作系统及浏览器未支持或用户未开启 Dark Mode */
body {
  background-color: white;
  color: black;
}

@media (prefers-color-scheme: dark) {
  /* 操作系统及浏览器支持且用户开启了 Dark Mode */
  body {
    background-color: black;
    color: white;
  }
}
```

## js control variable value

```js
const isSupported =
  window.CSS && window.CSS.supports && window.CSS.supports('--a', 0);

if (isSupported) {
  /* supported */
} else {
  /* not supported */
}

// set variable
document.body.style.setProperty('--primary', '#7F583F');

// get variable
document.body.style.getPropertyValue('--primary').trim();
// '#7F583F'

// remove variable
document.body.style.removeProperty('--primary');

// update :root variable
document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
```
