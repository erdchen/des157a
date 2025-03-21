window.addEventListener('load', function () {
    'use strict';
    const sliderContent = document.querySelector('.a');

    // How wide is the original set of images?
    const sliderHeight = sliderContent.offsetHeight;

    // clone the set of images and assign them the class name of '.b'
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";

    // add the clone to the DOM
    document.querySelector('.slider').appendChild(cloned);

    //get the :root element
    let root = document.querySelector(':root');

    // set the end of the left position based on the width of the slider
    const endTopPos = `-${sliderHeight}px`;    
    root.style.setProperty('--sliderheight', endTopPos);

    //Add the animate class to start animating the slider
    document.querySelector('.slider').classList.add("animate");
});