import {Center} from './Center';
import {Icon} from './Icon';

export class ZonesEditor {
    public id: number;
    public title: string;
    public center: Center;
    public radius: number;
    public unique_id: string;
    public fill_color: string;
    public stroke_width: number;
    public on_enter: string[];
    public icon: Icon;

    public constructor() {
        this.id = 0;
        this.title = null;
        this.icon = new Icon();
        this.center = new Center();
        this.radius = 0;
        this.fill_color = null;
        this.stroke_width = 0;
        this.on_enter = [];
    }



}
