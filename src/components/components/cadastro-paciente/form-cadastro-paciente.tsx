import { useEffect, useState } from "react"
import { FormsInput } from "../../universal/inputs/forms-input"
import { FormsInputSelect } from "../../universal/inputs/forms-input-select"
import axios from "axios"
import { ValidateFields } from "../../../utils/validate-fields"
import { FormatFields } from "../../../utils/format-fields"
import { ufList } from "../../../config/ufList-config"
import { GenresList } from "../../../config/genres-list-config"
import { MaritalStatusList } from "../../../config/marital-status-list-config"
import { LevelOfEducationList } from "../../../config/level-education-list-config"
import { InputYesNo } from "../../universal/inputs/forms-input-yes-no"

export const FormCadastroPaciente = () => {
    const validate = new ValidateFields;
    const format = new FormatFields;

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [naturalness, setNaturalness] = useState('');
    const [nationality, setNationality] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [profession, setProfession] = useState('');
    const [levelOfEducation, setLevelOfEducation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood ] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const [checkTreatment, setCheckTreatment] = useState(false);
    const [questionTreatment, setQuestionTreatment] = useState('');

    const [checkMedicalMedicine, setCheckMedicalMedicine] = useState(false);
    const [questionMedicalMedicine, setQuestionMedicalMedicine] = useState('');

    const [checkDrugs, setCheckDrugs] = useState(false);
    const [questionDrugs, setQuestionDrugs] = useState('');

    const [checkSmokes, setCheckSmokes] = useState(false);
    const [questionSmokes, setQuestionSmokes] = useState('');

    useEffect(() => {
        if (cep.length === 9) {
            console.log("foibuscar o cep")
            const clearCep = cep.replace(/\D/g, "");
            const getAddress = async (cep: string) => {
                const data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => { return res.data });
                if (data && !data.erro) {
                    setStreet(data.logradouro);
                    setNeighborhood(data.bairro);
                    setCity(data.localidade);
                    setUf(data.uf);
                }
            }

            getAddress(clearCep);
            console.log(uf);
        }
    }, [cep])

    return (
        <div className="w-full h-full flex flex-col gap-12">
            <div className="flex flex-col gap-10">
                <h1 className="text-xl font-md">Informações pessoais</h1>
                <div className="grid grid-cols-3 gap-6">
                    <FormsInput
                        label="Nome"
                        type="text"
                        validateField={validate.validateNotEmpty}
                        spellCheck={false}
                        value={name}
                        setValue={setName}
                    />

                    <FormsInputSelect
                        label="Gênero"
                        options={GenresList}
                        value={gender}
                        setValue={setGender}
                        validateField={validate.validateNotEmpty}
                    />

                    <FormsInput
                        label="Data de nascimento"
                        type="date"
                        spellCheck={false}
                        validateField={validate.validateNotEmpty}
                        value={dateOfBirth}
                        setValue={setDateOfBirth}
                    />

                    <FormsInput
                        label="RG"
                        type="text"
                        onlyNumbers={true}
                        validateField={validate.validateNotEmpty}
                        spellCheck={false}
                        value={rg}
                        setValue={setRg}
                    />

                    <FormsInput
                        label="CPF"
                        type="text"
                        spellCheck={false}
                        validateField={validate.validateCpf}
                        formatField={format.formatCpf}
                        maxLength={11}
                        onlyNumbers={true}
                        value={cpf}
                        setValue={setCpf}
                    />

                    <FormsInput
                        label="Naturalidade"
                        type="text"
                        spellCheck={false}
                        validateField={validate.validateNotEmpty}
                        value={naturalness}
                        setValue={setNaturalness}
                    />

                    <FormsInput
                        label="Nacionalidade"
                        type="text"
                        spellCheck={false}
                        validateField={validate.validateNotEmpty}
                        value={nationality}
                        setValue={setNationality}
                    />

                    <FormsInputSelect
                        label="Estado Civil"
                        options={MaritalStatusList}
                        value={maritalStatus}
                        setValue={setMaritalStatus}
                        validateField={validate.validateNotEmpty}
                    />

                    <FormsInput
                        label="Profissão"
                        type="text"
                        spellCheck={false}
                        validateField={validate.validateNotEmpty}
                        value={profession}
                        setValue={setProfession}
                    />

                    <FormsInputSelect
                        label="Grau de instrução"
                        options={LevelOfEducationList}
                        value={levelOfEducation}
                        setValue={setLevelOfEducation}
                        validateField={validate.validateNotEmpty}
                    />

                    <FormsInput
                        label="Telefone"
                        type="text"
                        onlyNumbers={true}
                        spellCheck={false}
                        validateField={validate.validateNotEmpty}
                        formatField={format.formatPhoneNumberBrazil}
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                    />

                    <FormsInput
                        label="Email"
                        type="email"
                        validateField={validate.validateEmail}
                        spellCheck={false}
                        value={email}
                        setValue={setEmail}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <h1 className="text-xl font-md">Endereço</h1>
                <div className="grid grid-cols-3 gap-6">
                    <FormsInput
                        onlyNumbers={true}
                        validateField={validate.validateCEP}
                        formatField={format.formatCep}
                        label="CEP"
                        maxLength={8}
                        type="text"
                        spellCheck={false}
                        value={cep}
                        setValue={setCep}
                    />
                    <FormsInput
                        label="Rua"
                        type="text"
                        spellCheck={false}
                        validateField={validate.validateNotEmpty}
                        setValue={setStreet}
                        value={street}
                    />
                    <FormsInput
                        label="Complemento"
                        type="text"
                        validateField={validate.validateNotEmpty}
                        spellCheck={false}
                        value={complement}
                        setValue={setComplement}
                    />
                    <FormsInput
                        label="Bairro"
                        type="text"
                        validateField={validate.validateNotEmpty}
                        spellCheck={false}
                        setValue={setNeighborhood}
                        value={neighborhood}
                    />
                    <FormsInput
                        label="Cidade"
                        type="text"
                        validateField={validate.validateNotEmpty}
                        spellCheck={false}
                        setValue={setCity}
                        value={city}
                    />
                    {/* <FormsInput
                        label="Estado"
                        type="text"
                        validateField={validate.validateNotEmpty}
                        spellCheck={false}
                        setValue={setUf}
                        value={uf}
                    /> */}

                    <FormsInputSelect
                        label="Estado"
                        options={ufList}
                        value={uf}
                        setValue={setUf}
                        validateField={validate.validateNotEmpty}
                    />

                </div>
            </div>


            <div className="flex flex-col gap-10">
                <h1 className="text-xl font-md">Anamnese</h1>
                <div className="flex flex-col gap-8">
                    <InputYesNo
                        label="Atualmente está em tratamento médico?"
                        checkValue={checkTreatment}
                        setCheckValue={setCheckTreatment}
                        questionText="Qual?"
                        questionValue={questionTreatment}
                        setQuestionValue={setQuestionTreatment}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Está tomando algum medicamento?"
                        checkValue={checkMedicalMedicine}
                        setCheckValue={setCheckMedicalMedicine}
                        questionText="Quais?"
                        questionValue={questionMedicalMedicine}
                        setQuestionValue={setQuestionMedicalMedicine}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Fez ou faz o uso de drogas?"
                        checkValue={checkDrugs}
                        setCheckValue={setCheckDrugs}
                        questionText="Quais?"
                        questionValue={questionDrugs}
                        setQuestionValue={setQuestionDrugs}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Fuma?"
                        checkValue={checkSmokes}
                        setCheckValue={setCheckSmokes}
                        questionText="Há quanto tempo e quantos cigarros por dia?"
                        questionValue={questionSmokes}
                        setQuestionValue={setQuestionSmokes}
                    >
                    </InputYesNo>
                </div>
            </div>
        </div>
    )
}