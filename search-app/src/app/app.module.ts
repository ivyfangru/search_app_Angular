import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HomeComponent } from './home/home.component';
import { SearchGiphyService } from './services/search-giphy.service';
import { SearchWikiService } from './services/search-wiki.service';
import { SearchHistoryService } from './services/search-history.service';


const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'search-history', component: SearchHistoryComponent},
	{path: '**', component: HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchGiphyService, SearchWikiService, SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
