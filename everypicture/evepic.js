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
    const links = document.querySelectorAll('div a');
    let thisPhoto;
    for (const eachLink of links){
        eachLink.addEventListener('click',function(event){
            //alert(event.target.getAttribute('alt'));
            thisPhoto = event.target.getAttribute('alt');
            document.querySelector('#overlay').className = 'showing';
            if(thisPhoto == 'pt1'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/111b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt2'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/112b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt3'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/113b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt4'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/114b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt5'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/115b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt6'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/116b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt7'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/211b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt8'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/212b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt9'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/213b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt10'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/214b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt11'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/215b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt12'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/216b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt13'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/311b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt14'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/312b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt15'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/313b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt16'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/314b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt17'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/315b.webp" alt="photo" id="close">`;
            }
            if(thisPhoto == 'pt18'){
                document.querySelector('#overlay').innerHTML = `<img src="img2/316b.webp" alt="photo" id="close">`;
            }

            const myClose = document.querySelector('#close');

            myClose.addEventListener('click', function(event){
                event.preventDefault();
                document.querySelector('#overlay').className = 'hidden';
                console.log('clicked');
            });
        });
    }

    
});