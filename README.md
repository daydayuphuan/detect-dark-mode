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

## css

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
