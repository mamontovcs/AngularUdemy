import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef} from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit.component';
import { RecipeListComponent } from 'src/app/recipes/recipe-list/recipe-list.component';

describe('ShoppingEditComponent', () => {
  let shoppingEditComponent: ShoppingEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [RecipeListComponent],
      declarations: [ShoppingEditComponent]
    });
    fixture = TestBed.createComponent(ShoppingEditComponent);
    shoppingEditComponent = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(shoppingEditComponent).toBeTruthy();
  });

  it('adds ingredient', () =>{
    // https://angdev.ru/doc/unit-testing-spy-objects/
    spyOn(shoppingEditComponent.ingredientAdded, "emit").and.callThrough();

    const amountInput = document.createElement('input');
    amountInput.value = '120';
    shoppingEditComponent.amountInputRef = new ElementRef(amountInput);

    const nameInput = document.createElement('input');
    nameInput.value = 'apples';
    shoppingEditComponent.nameInputRef = new ElementRef(nameInput);

    shoppingEditComponent.onAddItem();
    expect(shoppingEditComponent.ingredientAdded.emit).toHaveBeenCalled();
  })
});
