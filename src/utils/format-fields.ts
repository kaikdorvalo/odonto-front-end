export class FormatFields {
    public formatCpf(value: string) {
        let cpf = value.replace(/[^0-9]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    public formatCep(value: string) {
        let cep = value.replace(/[^0-9]/g, "");
        return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
    }

    public formatPhoneNumberBrazil(value: string) {
        let phone = value.replace(/[^0-9]/g, "");
        if (phone.length == 11) {
            return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
        }

        if (phone.length == 13) {
            return phone.replace(/(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/, "+$1 ($2) $3 $4-$5");
        }


        return phone;
    }
}