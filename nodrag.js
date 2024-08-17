document.querySelectorAll('img').forEach(imgTag => imgTag.ondragstart = () => false);
document.querySelectorAll('a').forEach(aTag => aTag.ondragstart = () => false);