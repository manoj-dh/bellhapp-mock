import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { signalPageComponent } from '../pages/SignalPage/SignalPage';
import { MenuHomeComponent } from '../pages/MenuHome/MenuHome';
import { listComponent } from '../pages/List/List';
import { recentItemComponent } from '../pages/Recent/Recent';
import { MenuSectionsComponent } from '../pages/MenuSection/MenuSection';
import { cartComponent } from '../pages/cart/cart';
import { detailComponent } from '../pages/detail/detail';

import { scrollParent } from '../directive/scroll';

@NgModule({
  declarations: [
    MyApp,
    signalPageComponent,
    MenuHomeComponent,
    listComponent,
    recentItemComponent,
    MenuSectionsComponent,
    scrollParent,
    detailComponent,
    cartComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    signalPageComponent,
    MenuHomeComponent,
    listComponent,
    recentItemComponent,
    MenuSectionsComponent,
    cartComponent,
    detailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
