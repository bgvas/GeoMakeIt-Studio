export class ZoneObject {
    public title: string;
    public center: {'latitude': 0, 'longitude': 0};
    public radius: number;
    public unique_id: string;
    public fill_color: string;
    public stroke_width: number;
    public on_enter: string[];
    public on_exit: string[];
    public icon: {'image': '', 'width': 0};

    public constructor() {
        this.title = '';
        this.icon = {'image': '', 'width': 0};
        this.center = {'latitude': 0, 'longitude': 0};
        this.radius = 0;
        this.unique_id = '';
        this.fill_color = '';
        this.stroke_width = 0;
        this.on_enter = [];
        this.on_exit = [];
    }

}
