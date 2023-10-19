let a = 15;
let b = 20;
let c = 10;
console.log('dsasdasdasdasdasdas');
const rezultat = document.getElementById('prvi-naslov')

const povrsinaJednakostranicnogTrougla = function(a) {
    let povrsina = (Math.pow(a,2) * Math.sqrt(3));
   rezultat.innerHTML = `Povrsina jednakostranicnog trougla je ${povrsina};`
};

povrsinaJednakostranicnogTrougla(b)

let h = 15;

const povrsinaJednakokrakogTrougla = function(b,h){
    let povrsina = (b * h) /2
    console.log(povrsina); 

};

povrsinaJednakokrakogTrougla(h)

let v = 15;
let f = 18;
const povrsinaPravouglogTrougla = function(v,f){
    console.log(f);
    let povrsina= (v * f) /2
    console.log(povrsina);
};

povrsinaPravouglogTrougla(f,2)

let trougao = prompt("Unesite ime trougla");
switch("trougao"){
    case "jednakoStranicni":
        povrsinaJednakostranicnogTrougla(1);
        break;
        case "jednaKokraki":
            povrsinaJednakokrakogTrougla(1,2);
            break;
            case "pravougli":
            povrsinaPravouglogTrougla(1,2);
            break;
}
