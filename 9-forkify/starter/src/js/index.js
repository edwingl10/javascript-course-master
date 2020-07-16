import Search from './models/Search';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected search item
        searchView.highlightSelected(id);

        //create new Recipe object
        state.recipe = new Recipe(id);

        try{
            //get Recipe data
            await state.recipe.getRecipe();

            //calculate time and servings
            state.recipe.calcTime();
            state.recipe.calcServings();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch(error){
            alert('error processing recipe');
        }
        
    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);

['hasChange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

//handling recipe button clicks
elements.recipe.addEventListener('click', e =>{
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        //decrease button clicked
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    }
    else if(e.target.matches('.btn-increase, .btn-increase *')){
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }
});