import {Game} from '../../games/models/games/game';
import {GamePluginsWithPluginsAndReleases} from './game-plugins-with-plugins-and-releases';

export class InstalledGamePluginsAndPluginsOfGameModel {

    public id: number;
    public game_plugins: GamePluginsWithPluginsAndReleases[];
}
