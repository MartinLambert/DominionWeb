import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CardListComponent} from './card-list/card-list.component';
import {CardDetailComponent} from './card-detail/card-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		CardListComponent,
		CardDetailComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
