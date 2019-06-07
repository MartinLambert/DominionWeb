import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
	declarations: [
		AppComponent,
		CardListComponent,
		CardDetailComponent,
		OptionsComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [CookieService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
