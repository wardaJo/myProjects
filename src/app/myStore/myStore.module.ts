import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ users: userReducer }), // 'items' is the feature name
    EffectsModule.forRoot([UserEffects]),

  ]
})
export class myStoreModule { }
