"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuadaRotas = void 0;
var GuadaRotas = /** @class */ (function () {
    function GuadaRotas() {
    }
    //| import("rxjs").Observable<boolean> | Promised
    //| UrlTree | Observable<boolean | UrlTree> | Promise < boolean | UrlTree >
    GuadaRotas.prototype.canActivate = function (route, state) {
        //se usuario autenticado
        return true;
    };
    return GuadaRotas;
}());
exports.GuadaRotas = GuadaRotas;
//# sourceMappingURL=guarda.js.map