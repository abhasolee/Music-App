window.addEventListener('load', ()=>{
    const sounds= document.querySelectorAll('.sounds');
    const tiles=document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual');
    const colors=[
        '#20e4ad',
        '#fbcc44',
        '#14a8a3',
        '#a656a1',
        '#a2cfcc',
        '#332920'
    ];

    //playing the music
    tiles.forEach((tile, index) =>{
        tile.addEventListener('click', function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Generating the color bubbles
    const createBubbles=(index)=>{
        const bubble=document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend',function(){
            bubble.remove();
        })
    }
});