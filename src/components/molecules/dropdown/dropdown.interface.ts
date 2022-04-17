import {PropType} from "vue";

export interface DropdownInterface {
    type: "divider" | "routerLink" | "toggle",
    value?: string | Array<string>,
    linkTo?: string
    fn?: PropType<() => {}>
}
