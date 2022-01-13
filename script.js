const ButtonPikachu = document.getElementById('ButtonPikachu');
const ButtonSloupock = document.getElementById('ButtonSloupock');



ButtonPikachu.addEventListener('click',function(){
let content =""
let div = document.createElement('div');
div.className = "alert";
content += `<div>${Pikachu.name} <br> <img class="ava" ${Pikachu.pic}>  <br> Health: ${Pikachu.health} <br> Hunger: ${Pikachu.hunger} <br>  Shit:${Pikachu.shit} <br> Depression: ${Pikachu.depression} <br> Alive:${Pikachu.Existence()}</div>`;
div.innerHTML = content;
document.body.append(div);
});



ButtonSloupock.addEventListener('click',function(){
let content =""
let div = document.createElement('div');
div.className = "alert";
content += `<div>${Sloupock.name} <br> <img class="ava" ${Sloupock.pic}> <br> Health: ${Sloupock.health} <br> Hunger: ${Sloupock.hunger} <br>  Shit:${Sloupock.shit} <br> Depression: ${Sloupock.depression} <br> Alive:${Sloupock.Existence()}</div>`;
div.innerHTML = content;
document.body.append(div);
});




ButtonSqirtle.addEventListener('click',function(){
let content =""
let div = document.createElement('div');
div.className = "alert";
content += `<div>${Sqirtle.name} <br> <img class="ava" ${Sqirtle.pic}> <br> Health: ${Sqirtle.health} <br> Hunger: ${Sqirtle.hunger} <br>  Shit:${Sqirtle.shit} <br> Depression: ${Sqirtle.depression} <br> Alive:${Sqirtle.Existence()} </div>`;
div.innerHTML = content;
document.body.append(div);
});


ButtonBulbasaur.addEventListener('click',function(){
let content =""
let div = document.createElement('div');
div.className = "alert";
content += `<div>${Bulbasaur.name} <br> <img class="ava" ${Bulbasaur.pic}> <br> Health: ${Bulbasaur.health} <br> Hunger: ${Bulbasaur.hunger} <br>  Shit:${Bulbasaur.shit} <br> Depression: ${Bulbasaur.depression} <br> Alive:${Bulbasaur.Existence()} </div>`;
div.innerHTML = content;
document.body.append(div);
});

ButtonRattata.addEventListener('click',function(){
let content =""
let div = document.createElement('div');
div.className = "alert";
content += `<div>${Rattata.name} <br> <img class="ava" ${Rattata.pic}> <br> Health: ${Rattata.health} <br> Hunger: ${Rattata.hunger} <br>  Shit:${Rattata.shit} <br> Depression: ${Rattata.depression}  <br> Alive:${Rattata.Existence()}</div>`;
div.innerHTML = content;
document.body.append(div);
});








//--
class Pokemon{
constructor(name,pic,health,hunger,shit,depression ){
this.name = name;
this.pic = pic;
this.health = health;
this.hunger = hunger;
this.shit = shit;
this.depression = depression;
}
Existence(){
  if(this.health > 0){
    return true;
  }
  return false;
}

};



//--Pikachu
let nameFirstPo = 'Pikachu';
let picFirstPo = 'src = "https://pbs.twimg.com/media/C14jFaOWQAAc831.jpg"';
let healthFirstPo = 0;
let hungerFirstPo = 100;
let shitFirstPo = 100;
let depressionFirstPo = 100;


//--Sloupock
let nameSecondPo = 'Sloupock';
let picSecondPo = 'src = "https://i.ytimg.com/vi/T5Zi3JBHH-U/maxresdefault.jpg"';
let healthSecondPo = 90;
let hungerSecondPo = 90;
let shitSecondPo = 90;
let depressionSecondPo = 90;

//--Sqirtle
let nameThirdPo = 'Sqirtle';
let picThirdPo = 'src = "http://hardnews24.ru/wp-content/uploads/2016/09/%D0%A1%D0%BA%D0%B2%D0%B8%D1%80%D1%82%D0%BB.jpg"';
let healthThirdPo = 110;
let hungerThirdPo = 50;
let shitThirdPo = 70;
let depressionThirdPo = 130;

//--Bulbasaur
let nameFourthPo = 'Bulbasaur';
let picFourthPo = 'src = "https://cdn-0.drawingtutorials101.com/drawing-tutorials/Anime-and-Manga/Pokemon/bulbasaur/how-to-draw-bulbasaur-from-pokemon.jpg"';
let healthFourthPo = 170;
let hungerFourthPo =30;
let shitFourthPo = 70;
let depressionFourthPo = 190;

//Rattata
let nameFifthPo = 'Rattata';
let picFifthPo = 'src = "https://i.pinimg.com/originals/73/1f/1e/731f1edf3f0ab88b5aa09158d9a5edf2.jpg"';
let healthFifthPo = 150;
let hungerFifthPo = 70;
let shitFifthPo = 90;
let depressionFifthPo = 70;








const Pikachu = new Pokemon ( nameFirstPo, picFirstPo,healthFirstPo, hungerFirstPo, shitFirstPo, depressionFirstPo);
const Sloupock = new Pokemon ( nameSecondPo,picSecondPo,healthSecondPo,hungerSecondPo,shitSecondPo,depressionSecondPo);
const Sqirtle = new Pokemon ( nameThirdPo,picThirdPo,healthThirdPo,hungerThirdPo,shitThirdPo,depressionThirdPo);
const Bulbasaur = new Pokemon ( nameFourthPo,picFourthPo,healthFourthPo,hungerFourthPo,shitFourthPo,depressionFourthPo);
const Rattata = new Pokemon ( nameFifthPo,picFifthPo,healthFifthPo,hungerFifthPo,shitFifthPo,depressionFifthPo);