export class AccessControlResponse {
    actions: ActionsModel[];
    controls: ControlsModel[];
    variables:VariablesModel[];

    constructor() {
        this.actions = new Array<ActionsModel>();
        this.controls = new Array<ControlsModel>();
        this.variables=new  Array<VariablesModel>()
    }
}

export class ActionsModel {
    action: string;
    visibility: boolean;
    state: boolean;
}

export class ControlsModel {
    controlID: string;
    visibility: boolean;
    state: boolean;
}
export class VariablesModel {
    name: string;
    value: number;
}

export class ScreenListByUserResponse {
    ScreenId:number ;
    ScreenName: string;
    // AccessRight:number;
}