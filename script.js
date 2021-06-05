const container =document.querySelector('.container');
const lorem = 'https://unsplash.com/s/photos/random'
const rows= 10

for(i=0;  i<rows*3 ;i++ ){
    const img=document.createElement('img')
    img.src=`${lorem}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return`${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random()*10) +300
}