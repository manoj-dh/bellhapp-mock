import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { welcomePageComponent } from '../pages/WelcomePage/WelcomePage';
  import { bottomSheetComponent } from '../pages/WelcomePage/bottom_sheet';
import { homePageComponent } from '../pages/HomePage/HomePage';
import { signalPageComponent } from '../pages/SignalPage/SignalPage';
import { MenuHomeComponent } from '../pages/MenuHome/MenuHome';
import { listComponent } from '../pages/List/List';
import { recentItemComponent } from '../pages/Recent/Recent';
import { MenuSectionsComponent } from '../pages/MenuSection/MenuSection';
import { cartComponent } from '../pages/cart/cart';
import { detailComponent } from '../pages/detail/detail';
  import { menuItemCustomPageComponent } from '../pages/MenuItemCustomPage/MenuItemCustomPage';

import { scrollParent } from '../directive/scroll';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    MyApp,
    welcomePageComponent,
      bottomSheetComponent,
    homePageComponent,
    signalPageComponent,
    MenuHomeComponent,
    listComponent,
    recentItemComponent,
    MenuSectionsComponent,
    scrollParent,
    detailComponent,
      menuItemCustomPageComponent,
    cartComponent
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    NoopAnimationsModule,
    IonicModule.forRoot(MyApp,{mode:'md'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    welcomePageComponent,
      bottomSheetComponent,
    homePageComponent,
    signalPageComponent,
    MenuHomeComponent,
    listComponent,
    recentItemComponent,
    MenuSectionsComponent,
    cartComponent,
    detailComponent,
      menuItemCustomPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
