import {GamePlugin} from './game-plugin';
import {Plugin} from '../../plugins/models/plugin';
import {PluginRelease} from '../../plugins/models/available_plugins/plugin-release';

export class GamePluginsWithPluginsAndReleases {

    public gamePlugin: GamePlugin;
    public plugin: Plugin;
    public release: PluginRelease;
}
