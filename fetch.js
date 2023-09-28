//FETCH
//   
//POST

const BASE_URL= 'https://pokeapi.co/api/v2/';
//fetch significa ir a buscar algo, traer algo )
//fetch (URL + endpoint) es para indicar de donde es que vas a sacar o solicitar la info    y   .then indica que cuando obtenga ese fetch va a obtener una respuesta (res)

//Fetch no async
/** 
fetch(BASE_URL + 'pokemon/ditto')
.then((res) => res.json()) //Se formatea a json para que la información sea legible para el js
.then(data => console.log(data));
*/

//Fetch async
const fetchPokemon = async (pokemon) => {
    try{ //Significa intenta eso y si no
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse; //Parsed (parsear ) es formatear

    } catch (err){ //atrapa esto
        console.error(err);

    }
}


/**
 * //Obtener un pokemon
document.getElementById('get-btn')
 .addEventListener('click' , async () => {
    const text = document.getElementById('input_name').value.toLowerCase();
    const pokemon = await fetchPokemon(text);
    localStorage.setItem('currentPokeId', pokemon.id);
    console.log(pokemon.name, pokemon.id,pokemon.weight);

 })
 */
 
 const h2_poke_name = document.querySelector('#name'); //info que saldra en el h2
 const h3_poke_id = document.querySelector('#id'); //info que saldrá en el h3
 const h4_poke_weight = document.querySelector('#weight'); //info que saldrá en el h4

 const get_btn = document.querySelector('#get-btn');

 get_btn.addEventListener('click' , async() =>{
    try{
    const {value:text} = document.querySelector('#input_name'); //Es la info del nombre que pusimos en el input
    const pokemon_data = await fetchPokemon(text.toLowerCase()) //Aplica la funcion fetchPokemon del
    h2_poke_name.textContent = pokemon_data.name;
    h3_poke_id.textContent = pokemon_data.id;
    h4_poke_weight.textContent = pokemon_data.weight;
    localStorage.setItem('currentPokeId', pokemon_data.id);
    localStorage.setItem('currentName', pokemon_data.name);
    localStorage.setItem('currentWeight', pokemon_data.weight);
    console.log(pokemon_data.name,pokemon_data.id,pokemon_data.weight);
    }
    catch (error){ 
        console.error(error);
    }
 } );

 document.addEventListener('DOMContentLoaded' , async () => {
    const storeId = localStorage.getItem('currentPokeId');
    const initialId = storeId ? parseInt(storeId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
 })

 //

 document.getElementById('previous-btn')
 .addEventListener('click' , async() => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
    const newId = Math.max(1, currentPokeId -1);
    const pokemon_data = await fetchPokemon(newId);
    h2_poke_name.textContent = pokemon_data.name;
    h3_poke_id.textContent = pokemon_data.id;
    h4_poke_weight.textContent = pokemon_data.weight;
    localStorage.setItem('currentPokeId', pokemon_data.id);
    localStorage.setItem('currentName', pokemon_data.name);
    localStorage.setItem('currentWeight', pokemon_data.weight);
    console.log(pokemon_data.name,pokemon_data.id,pokemon_data.weight);
    
 })

 document.getElementById('next-btn')
 .addEventListener('click' , async() => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
    const newId = currentPokeId +1;
    const pokemon_data = await fetchPokemon(newId);
    h2_poke_name.textContent = pokemon_data.name;
    h3_poke_id.textContent = pokemon_data.id;
    h4_poke_weight.textContent = pokemon_data.weight;
    localStorage.setItem('currentPokeId', pokemon_data.id);
    localStorage.setItem('currentName', pokemon_data.name);
    localStorage.setItem('currentWeight', pokemon_data.weight);
    console.log(pokemon_data.name,pokemon_data.id,pokemon_data.weight);
 })
