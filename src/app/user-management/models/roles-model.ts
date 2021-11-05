export class RolesModel {

        public id: number;
        public name: string;
        public guard_name: string;
        public created_at: string;
        public updated_at: string;
        public pivot: {
            model_id: number;
            model_type: string;
            role_id: number;
        }
}
