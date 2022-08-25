// Angular
import {Component, OnInit} from '@angular/core';
import {Prod} from '../../../_future/_future_src_app/shop/product/shared/product.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {User} from '../shared/models/user.model';
import {HttpHelperApiService} from '../services/api/http-helper-api.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    public rows: Array<Prod>;
    public controls: FormArray;
    public prod: Prod;
    public loaded = false;
    public fullInfoVar = false;
    public users: Array<User>;
    public showUsers = false;

    constructor(public httpHelperApiService: HttpHelperApiService) {
    }

    ngOnInit(): void {
        // this.getProducts();
    }

    updateField(index: number, field: string) {
        const control = this.getControl(index, field);
        if (control.valid) {
            const newArray = this.controls.at(index).value;
            this.rows[index] = newArray;
            const path = 'products/' + this.rows[index].id;
            this.httpHelperApiService.put(path, newArray);

        }
    }

    getControl(index: number, field: string): FormControl {
        return this.controls.at(index).get(field) as FormControl;
    }

    public delete(id: number) {
        const path = 'products/' + id;
        this.httpHelperApiService.delete(path).subscribe((r) => {
            this.rows = this.rows.filter((p, i) => {
                if (Number(id) === p.id) {
                    return false;
                }
                return true;
            }, this.rows);
        });
    }

    // public copy(i: number) {
    //     this.prod = this.rows[i];
    //     this.httpHelperApiService.post('products/', this.prod).subscribe((r) => {
    //         this.getProducts();
    //         return true;
    //     });
    // }

    public info(x) {
        this.fullInfoVar = true;
    }

    // getProducts() {
    //     this.httpHelperApiService.get('products').subscribe((data: Prod[]) => {
    //         //Set local array
    //         this.rows = data;
    //         //Sort by id
    //         this.rows.sort((a, b) => a.id > b.id ? 1 : -1);
    //         //Initialize FormGroup form
    //         this.initArrayForm();
    //         //Flag page as loaded
    //         this.loaded = true;
    //     });
    // }

    // getUsers() {
    //     this.httpHelperApiService.get('admin/users').subscribe((data: User[]) => {
    //         //Set local array
    //         this.users = data;
    //         //Sort by id
    //         this.users.sort((a, b) => a.id > b.id ? 1 : -1);
    //         //Show to user
    //         this.showUsers = true;
    //     });
    // }

    initArrayForm() {
        const toGroups = this.rows.map(entity => new FormGroup({
            id: new FormControl({value: entity.id, disabled: false}),
            partNumber: new FormControl(entity.partNumber),
            category: new FormControl(entity.category)
        }));
        this.controls = new FormArray(toGroups);
    }

}
