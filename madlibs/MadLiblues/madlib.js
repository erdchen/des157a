(function(){
    'use strict';
    console.log('reading js');

    const myArticle = document.querySelector('#madlib');


    const myButton = document.querySelector('#go');

   
    

    myButton.addEventListener('click', function(event){
        event.preventDefault();
        console.log('clicked');

        const name1 = document.querySelector('#name1').value;
        const verb1 = document.querySelector('#verb1').value;
        const city = document.querySelector('#city').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const place = document.querySelector('#place').value;
        const adj2 = document.querySelector('#adj2').value;
        const adj3 = document.querySelector('#adj3').value;
        const noun2 = document.querySelector('#noun2').value;
        const money = document.querySelector('#money').value;
        const name2 = document.querySelector('#name2').value;
        const road = document.querySelector('#road').value;
        const noun3 = document.querySelector('#noun3').value;
        const noun4 = document.querySelector('#noun4').value;
        const name3 = document.querySelector('#name3').value;
        const verb2 = document.querySelector('#verb2').value;
        const adj4 = document.querySelector('#adj4').value;
        
        let myText;

        if (name1 == ''){
            myText = "Please provide a name";
            document.querySelector('#name1').focus();
        }
        else if (verb1 == ''){
            myText = "Please provide a verb";
            document.querySelector('#verb1').focus();
        }
        else if (city == ''){
            myText = "Please name a city";
            document.querySelector('#city').focus();
        }
        else if (adj1 == ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj1').focus();
        }
        else if (noun1 == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun1').focus();
        }
        else if (place == ''){
            myText = "Please name a place";
            document.querySelector('#place').focus();
        }
        else if (adj2 == ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj2').focus();
        }
        else if (adj3 == ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj3').focus();
        }
        else if (noun2 == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun2').focus();
        }
        else if (money == ''){
            myText = "Please give an amount of money";
            document.querySelector('#money').focus();
        }
        else if (name2 == ''){
            myText = "Please provide a name";
            document.querySelector('#name2').focus();
        }
        else if (road == ''){
            myText = "Please provide a road";
            document.querySelector('#road').focus();
        }
        else if (noun3 == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun3').focus();
        }
        else if (noun4 == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun4').focus();
        }
        else if (name3 == ''){
            myText = "Please provide a name";
            document.querySelector('#name3').focus();
        }
        else if (verb2 == ''){
            myText = "Please provide a noun";
            document.querySelector('#verb2').focus();
        }
        else if (adj4 == ''){
            myText = "Please provide an adverb";
            document.querySelector('#adj4').focus();
        }

        else {
            myText = `<p id="songtitle"><span>${name1}</span> Still Got the Blues</p>

                <p>(Slow shuffle beat, a grit in your voice...)</p>

                <p>I was <span>${verb1}</span> down in <span>${city}</span>, just mindin' my way,<br>When a <span>${adj1}</span> stranger took my <span>${noun1}</span> away.<br>Now I'm stuck in this <span>${place}</span> with a <span>${adj2}</span> frown,<br>Got the mean ol'<span>${adj3}</span> blues draggin' me down.<br></p>

                <p>(Guitar lick -- Wah,wah...)</p>

                <p>My <span>${noun2}</span> won't start, my body is sore,<br>I Lost my last <span>${money}</span>, can't take no more.<br>I tried to call up <span>${name2}</span> for some advice,<br>But all they said was, "Boy, life ain't nice."</p>

                <p>(Sigh -- slide guitar wails...)</p>

                <p>So I'm headin' down <span>${road}</span>, with my <span>${noun3}</span> in hand,<br>Ain't got no <span>${noun4}</span>, just a one man's band.<br>If you see my <span>${name3}</span>, tell'em I'm <span>${verb2}</span>,<br>Singin' them <span>${adj4}</span>, while my guitar rings.</p>

                <button type="submit" id="close">Redo</button>` ;
            
            document.querySelector('#name1').value = '';
            document.querySelector('#verb1').value = '';
            document.querySelector('#city').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#noun1').value = '';
            document.querySelector('#place').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#adj3').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#money').value = '';
            document.querySelector('#name2').value = '';
            document.querySelector('#road').value = '';
            document.querySelector('#noun3').value = '';
            document.querySelector('#noun4').value = '';
            document.querySelector('#name3').value = '';
            document.querySelector('#verb2').value = '';
            document.querySelector('#adj4').value = '';
        }

        myArticle.innerHTML = myText;

        document.querySelector('#overlay').className = "showing";

        const myClose = document.querySelector('#close');

        myClose.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#overlay').className = "hidden";
            console.log('clicked');
        });
        
    });

    
})();
