"use strict";
class Lugas {
    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.aSide = document.querySelector("#aSide");
        this.bSide = document.querySelector("#bSide");
        this.perimeter = document.querySelector("#perimeter");
        this.calcButton = document.querySelector("#calcButton");
    }
    handleEvent() {
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            console.log("működik");
            this.startCalc();
        });
    }
    startCalc() {
        var _a, _b;
        const aSideInput = Number((_a = this.aSide) === null || _a === void 0 ? void 0 : _a.value);
        const bSideInput = Number((_b = this.bSide) === null || _b === void 0 ? void 0 : _b.value);
        const perimeter = this.calcPerimeter(aSideInput, bSideInput);
        this.perimeter.value = String(perimeter);
    }
    calcPerimeter(aSideInput, bSideInput) {
        return 2 * (aSideInput + bSideInput);
    }
}
new Lugas();
