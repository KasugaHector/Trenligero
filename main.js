document.addEventListener('DOMContentLoaded', () => {const btnInicial = document.querySelector("#btnInicial");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
 
const models = {
0: document.querySelector("#modelo-0"),
1: document.querySelector("#modelo-1"),
2: document.querySelector("#modelo-2"),
3: document.querySelector("#modelo-3"),
4: document.querySelector("#modelo-4"),
};
 
/**
* Función central para cambiar la visibilidad de los modelos.
* @param {number} indexToShow - El índice del modelo (0 al 7) que se debe mostrar.
*/
const showModel = (indexToShow) => {
console.log(`Mostrando modelo: ${indexToShow}`);
 
Object.keys(models).forEach(key => {
const model = models[key];
 
if (key == indexToShow) {
model.setAttribute('visible', 'true');
} else {
model.setAttribute('visible', 'false');
}
});
};btnInicial.addEventListener('click', () => showModel(0));
btn1.addEventListener('click', () => showModel(1));
btn2.addEventListener('click', () => showModel(2));
btn3.addEventListener('click', () => showModel(3));
btn4.addEventListener('click', () => showModel(4));
e.preventDefault();
});
 

});
