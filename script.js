//buscando uma lista de uma array usando o for

let msg=document.getElementById('msg')
const usuarios=[
    {nome: "Huguinho", idade:18},
    {nome: "Zezinho", idade:18},
    {nome: "Luizinho", idade:20},
];

const Users= usuarios.length;

for(let i=0; i<Users; i++){
    msg.innerHTML +=  `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var image=[
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
];

/* decalrando variaveis */
var index =0;
var time=2000;

/* criando uma funçao */
function slideShow(){
    document.getElementById('image').src =image[index]; /* pega o id */
    index ++;
    if (index == image.length){index = 0;}/*verifica se tem magens e conta*/
    setTimeout("slideShow()",time);/* defininco o tempo de 2 milisegndos*/
}

slideShow();