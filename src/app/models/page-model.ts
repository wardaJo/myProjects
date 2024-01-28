import { UserModel } from "./user-model";
// Modal includes Page Data Definition
export interface PageModel {
    page:number,
    total_pages:number,
    per_page:number,
    data:UserModel[];
}
