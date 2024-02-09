import { SelectOption } from "../components/universal/inputs/types/select-options";

export const LevelOfEducationList: SelectOption[] = [
    { label: 'Educação infantil', value: 'educacaoinfantil' },
    { label: 'Fundamental', value: 'fundamental' },
    { label: 'Médio', value: 'medio', defaultSelected: true },
    { label: 'Superior (Graduação)', value: 'superior' },
    { label: 'Pós-graduação', value: 'pos-graduacao' },
    { label: 'Mestrado', value: 'mestrado' },
    { label: 'Doutorado', value: 'doutorado' },
]