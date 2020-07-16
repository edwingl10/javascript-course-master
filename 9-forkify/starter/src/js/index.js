import Search from './models/Search';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';

/* global state of the app
* Search object
* current recipe object
* shopping list object
* liked recipes
*/
const state = {};

//SEARCH CONTROLLER
const controlSearch = async () => {
    //get query from the view
    const query = searchView.getInput();
    
    if(query){
        //new search object and add to state
        state.search = new Search(query);

        //prepare ui for results 
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try{
            //search for recipes 
            await state.search.getResults();
            state.recipe.parseIngredients();

            //render results on ui
            clearLoader();
            searchView.renderResults(state.search.result);
        }catch(error){
            alert('Something went wrong with the search');
            clearLoader();
        }

    }
}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch(); 
});

elements.searchResPages.addEventListener('click', e=>{
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = ParseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


//RECIPE CONTROLLER
const controlRecipe = async () =>{
    //get id from url
    const id = window.location.hash.replace('#','');

    if(id){
        //prepare ui for changes

        //create new Recipe object
        state.recipe = new Recipe(id);

        try{
            //get Recipe data
            await state.recipe.getRecipe();

            //calculate time and servings
            state.recipe.calcTime();
            state.recipe.calcServings();

            //render recipe
            console.log(state.recipe);
        } catch(error){
            alert('error processing recipe');
        }
        
    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);

['hasChange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));