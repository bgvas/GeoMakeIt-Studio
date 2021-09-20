import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePluginsRoutingModule } from './game-plugins-routing.module';
import {GamePluginsService} from './services/game-plugins.service';
import {GamePluginCardComponent} from './components/game-plugin-card/game-plugin-card.component';
import {GamePluginDataService} from './services/gamePluginData.service';
import {GamePluginConfigService} from './services/gamePluginConfig.service';
import { GamePluginsComponent } from './game-plugins.component';
import { JsonFilesConfigurationComponent } from './components/json-files-configuration/json-files-configuration.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
      GamePluginCardComponent,
      GamePluginsComponent,
      JsonFilesConfigurationComponent],
    imports: [
        CommonModule,
        GamePluginsRoutingModule,
        MatTabsModule
    ],
    exports: [
        JsonFilesConfigurationComponent
    ],
  providers: [
      GamePluginsService,
      GamePluginDataService,
      GamePluginConfigService]
})
export class GamePluginsModule { }
