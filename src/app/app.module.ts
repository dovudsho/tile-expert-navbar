import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarSearchComponent } from "./navbar/components/navbar-search/navbar-search.component";
import { CheckboxComponent } from "./shared/components/checkbox/checkbox.component";
import { FilterFormComponent } from "./navbar/components/navbar-search/filter-form/filter-form.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSearchComponent,
    CheckboxComponent,
    FilterFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
