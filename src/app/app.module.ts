import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { LoginModule } from 'app/login/login.module';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { HTTPService } from 'app/common/services/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule
  ],
  providers: [
    {
      provide: HTTPService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        localStorage.setItem('is_local', JSON.stringify(false));
        return new HTTPService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
