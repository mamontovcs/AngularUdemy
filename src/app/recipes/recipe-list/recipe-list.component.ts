import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Soup', 'Simple chicken soup', 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/hot-and-sour-soup.jpg?quality=82&strip=all'),
    new Recipe('Soup2', 'Simple chicken soup', 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/hot-and-sour-soup.jpg?quality=82&strip=all')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe);
    
    this.recipeWasSelected.emit(recipe);
  }
}
