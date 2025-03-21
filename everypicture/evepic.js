window.addEventListener('load', function () {
    'use strict';
    const sliderContent = document.querySelector('.a');

    // How wide is the original set of images?
    const sliderWidth = sliderContent.offsetWidth;

    // clone the set of images and assign them the class name of '.b'
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";

    // add the clone to the DOM
    document.querySelector('#slider1').appendChild(cloned);

    //get the :root element
    let root = document.querySelector(':root');

    // set the end of the left position based on the width of the slider
    const endLeftPos = `-${sliderWidth}px`;    
    root.style.setProperty('--sliderwidth', endLeftPos);

    //Add the animate class to start animating the slider
    document.querySelector('#slider1').classList.add("animate");

    //slider2 ------------------------------------------------
    const sliderContent2 = document.querySelector('.c');

    // How wide is the original set of images?
    const sliderWidth2 = sliderContent2.offsetWidth;

    // clone the set of images and assign them the class name of '.b'
    const cloned2 = sliderContent2.cloneNode(true);
    cloned2.className = "d";

    // add the clone to the DOM
    document.querySelector('#slider2').appendChild(cloned2);

    // set the end of the left position based on the width of the slider
    const endLeftPos2 = `-${sliderWidth2}px`;    
    root.style.setProperty('--sliderwidth2', endLeftPos2);

    //Add the animate class to start animating the slider
    document.querySelector('#slider2').classList.add("animate2");

    //slider3 ------------------------------------------------
    const sliderContent3 = document.querySelector('.e');

    // How wide is the original set of images?
    const sliderWidth3 = sliderContent2.offsetWidth;

    // clone the set of images and assign them the class name of '.b'
    const cloned3 = sliderContent3.cloneNode(true);
    cloned2.className = "f";

    // add the clone to the DOM
    document.querySelector('#slider3').appendChild(cloned3);

    // set the end of the left position based on the width of the slider
    const endLeftPos3 = `-${sliderWidth3}px`;    
    root.style.setProperty('--sliderwidth3', endLeftPos3);

    //Add the animate class to start animating the slider
    document.querySelector('#slider3').classList.add("animate3");

    const slider1 = document.querySelector('#slider1');

    slider1.addEventListener('mouseenter', () => {
        slider1.classList.remove("animate");
    });
    slider1.addEventListener('mouseleave', () => {
        slider1.classList.add("animate");
    });

    const slider2 = document.querySelector('#slider2');

    slider2.addEventListener('mouseenter', () => {
        slider2.classList.remove("animate2");
    });
    slider2.addEventListener('mouseleave', () => {
        slider2.classList.add("animate2");
    });

    const slider3 = document.querySelector('#slider3');

    slider3.addEventListener('mouseenter', () => {
        slider3.classList.remove("animate3");
    });
    slider3.addEventListener('mouseleave', () => {
        slider3.classList.add("animate3");
    });

    //overlay------------------------------------------------
});