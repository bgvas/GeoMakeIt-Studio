import {ComponentsModule} from '../../../components/components.module';
import {Component} from '../component/component';
import {DesignerItem} from '../designerItem/designer-item';

export interface Designer {

    [key: string]: DesignerItem;
}

