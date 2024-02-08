import isEmail from "validator/lib/isEmail";
import { isEmpty } from "validator";

export class ValidateFields {
    public validateEmail(value: string) {
        return isEmail(value);
    }

    public validatePassword(value: string) {
        if (value.length < 8) {
            return false
        }
        return true;
    }

    public validateCEP(value: string) {
        if (value.length < 9) {
            return false
        }

        return true;
    }

    public validateCpf(value: string) {
        if (typeof value !== "string") return false
        value = value.replace(/[\s.-]*/igm, '')
        if (
            !value ||
            value.length != 11 ||
            value == "00000000000" ||
            value == "11111111111" ||
            value == "22222222222" ||
            value == "33333333333" ||
            value == "44444444444" ||
            value == "55555555555" ||
            value == "66666666666" ||
            value == "77777777777" ||
            value == "88888888888" ||
            value == "99999999999" 
        ) {
            return false
        }
        var soma = 0
        var resto
        for (var i = 1; i <= 9; i++) 
            soma = soma + parseInt(value.substring(i-1, i)) * (11 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(value.substring(9, 10)) ) return false
        soma = 0
        for (var i = 1; i <= 10; i++) 
            soma = soma + parseInt(value.substring(i-1, i)) * (12 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(value.substring(10, 11) ) ) return false
        return true
    }

    public validateNotEmpty(value: string) {
        return !isEmpty(value);
    }
}

