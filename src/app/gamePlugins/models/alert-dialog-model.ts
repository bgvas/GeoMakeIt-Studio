export class AlertDialogModel {

    public unique_id?: string;
    public cancellable?: boolean;
    public message?: string;
    public title?: string;
    public negative_button?: {
                text?: string,
                action?: string
    };
    public positive_button?: {
                text?: string,
                action?: string
    };
    public neutral_button?: {
                text?: string,
                action?: string
    };
}
