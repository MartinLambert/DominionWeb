
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { OptionsComponent } from './options/options.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
	declarations: [
		AppComponent,
		CardListComponent,
		CardDetailComponent,
		OptionsComponent
	],
	imports: [],
	providers: [CookieService],
	bootstrap: [AppComponent]
})
export class AppModule { }
