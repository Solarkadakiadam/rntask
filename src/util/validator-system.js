import validate from "validate.js";

class validatorSystem {
    constructor() {
        this.constraints = {};
        this.values = {};
        this.isValid = false;
    }



    setConstraints(constraints) {
        this.constraints = constraints;
        this.values = {};
        this.isValid = false;
        Object.keys(constraints).map(constraint => {
            this.values[constraint] = {
                lastErrorMessage: "",
                isItChangedBefore: false,
            }
        });
    }

    setConstraintsWithoutClear(constraints) {
        this.constraints = constraints;
    }

    getErrorMessage(field) {
        if (this.values[field])
            return this.values[field].lastErrorMessage;
        return "";
    }

    isNullOrEmpty(value) {
        return (value === "" || value === null || value === undefined)
    }

    getDescendantProp(obj, desc) {
        var arr = desc.split(".");
        while (arr.length && (obj = obj[arr.shift()]));
        return obj;
    }

    validateFields(fieldValues = {}, setAllFieldsToChanged = false) {
        Object.keys(this.constraints).map(key => {
            if (!this.values[key])
                this.values[key] = {
                    lastErrorMessage: "",
                    isItChangedBefore: false,
                }
        })
        if (setAllFieldsToChanged) {
            Object.keys(this.values).map(key => {
                this.values[key].isItChangedBefore = true;
            })
        }
        // Object.keys(this.values).map(key => {
        //     if (fieldValues[key] === "") { fieldValues[key] = null; };
        // }
        // );
        var result = validate(fieldValues, this.constraints, { fullMessages: false });
        Object.keys(this.values).map(key => {
            if (!((this.isNullOrEmpty(this.getDescendantProp(fieldValues, key)) || this.getDescendantProp(fieldValues, key)?.length === 0) && !this.values[key].isItChangedBefore)) {
                this.values[key].isItChangedBefore = true;
                if (result && result[key]) {
                    this.values[key].lastErrorMessage = result[key][0];
                } else {
                    this.values[key].lastErrorMessage = "";
                }
            }

        });
        this.isValid = (result === null || result === undefined);
        return this.isValid;
    }

}
export default validatorSystem;