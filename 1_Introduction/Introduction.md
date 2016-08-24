JavaScript Introduction
=======================

This page contains some examples of what JavaScript can do.

JavaScript Can Change HTML Content
----------------------------------
One of many JavaScript HTML methods is **getElementById()**.

This example uses the method to "find" an HTML element (with id="demo") and changes the element content (**innerHTML**) to "Hello JavaScript":

Example:

```javascript
document.getElementById("demo").innerHTML = "Hello JavaScript";
```
_____________________________________________________________________________________________________________________________

JavaScript Can Change HTML Attributes
-------------------------------------
This example changes an HTML image by changing the src (source) attribute of an `<img>` tag:

```javascript
<button onclick="document.getElementById('myImage').src='img/pic_bulbon.gif'">Turn on the light</button>
<button onclick="document.getElementById('myImage').src='img/pic_bulboff.gif'">Turn off the light</button>
```

![bulbon](img/pic_bulbon.gif)
![bulboff](img/pic_bulboff.gif)