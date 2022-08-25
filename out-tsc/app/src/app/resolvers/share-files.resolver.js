import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ShareFilesResolver = class ShareFilesResolver {
    constructor(FileShareApiService) {
        this.FileShareApiService = FileShareApiService;
        this.fileName = 'ShareFilesResolver';
    }
    resolve(route, state) {
        return this.FileShareApiService.getSharedFiles({ sent: route.data['sent'] });
    }
};
ShareFilesResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ShareFilesResolver);
export { ShareFilesResolver };
//# sourceMappingURL=share-files.resolver.js.map