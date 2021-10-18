export class MainPluginZonesModel {

    public  title: string;
    public center: {
        latitude: number;
        longitude: number;
    }
    public radius: number;
    public unique_id: string;
    public fill_color: string;
    public stroke_width: number;
    public on_enter: string[];
    public on_exit: string[];
    public icon: {
        image: string;
        width: number;
    }

}
