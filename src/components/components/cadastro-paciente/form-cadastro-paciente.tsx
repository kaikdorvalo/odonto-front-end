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
import { BloodPressureList } from "../../../config/blood-pressure-list-config"
import { InputTextArea } from "../../universal/inputs/forms-input-textarea"
import { BleedingList } from "../../../config/bleeding-list-config"
import { HealingList } from "../../../config/healing-list-config"

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
    
    const [checkAllergy, setCheckAllergy] = useState(false);
    const [questionAllergy, setQuestionAllergy] = useState('');

    const [checkHospitalized, setCheckHospitalized] = useState(false);
    const [questionHospitalized, setQuestionHospitalized] = useState('');

    const [checkSurgery, setCheckSurgery] = useState(false);
    const [questionSurgery, setQuestionSurgery] = useState('');

    const [bloodPressure, setBloodPressure] = useState('');

    const [checkAir, setCheckAir] = useState(false);

    const [checkUrinate, setCheckUrinate] = useState(false);

    const [feed, setFeed] = useState('');

    const [bleeding, setBleeding] = useState('');

    const [healing, setHealing] = useState('');

    const [checkPregnant, setCheckPregnant] = useState(false);
    const [questionPregnant, setQuestionPregnant] = useState('');
    
    const [checkBreastfeed, setCheckBreastfeed] = useState(false);

    const [checkContraceptive, setCheckContraceptive] = useState(false);
    
    const [checkHeartAttackOrArteriosclerosis, setCheckHeartAttackOrArteriosclerosis] = useState(false);

    const [checkHighBloodPressure, setCheckHighBloodPressure] = useState(false);
    const [checkCirculatoryProblems, setCheckCirculatoryProblems] = useState(false);
    const [checkNervousProblems, setCheckNervousProblems] = useState(false);
    const [checkRadioOrChemotherapy, setCheckRadioOrChemotherapy] = useState(false);
    const [checkAnemia, setCheckAnemia] = useState(false);
    const [checkArthritis, setCheckArthritis] = useState(false);
    const [checkWeightLossOrGain, setCheckWeightLossOrGain] = useState(false);
    const [checkAsthmaOrBronchitis, setCheckAsthmaOrBronchitis] = useState(false);
    const [checkDiabetes, setCheckDiabetes] = useState(false);
    const [checkCardiacPacemakerOrCardiacProsthesis, setCheckCardiacPacemakerOrCardiacProsthesiss] = useState(false);
    const [checkTuberculosis, setCheckTuberculosis] = useState(false);
    const [checkPsychiatricTreatment, setCheckPsychiatricTreatment] = useState(false);
    const [checkEpilepsy, setCheckEpilepsy] = useState(false);
    const [checkFaintingOrConvulsions, setCheckFaintingOrConvulsions] = useState(false);
    const [checkThyroidGland, setCheckThyroidGland] = useState(false);
    const [checkNeoplasmsOrCancer, setCheckNeoplasmsOrCancer] = useState(false);
    const [checkGastricUlcer, setCheckGastricUlcer] = useState(false);
    const [checkStrokes, setCheckStrokes] = useState(false);
    const [checkRheumaticFever, setCheckRheumaticFever] = useState(false);
    const [checkLiver, setCheckLiver] = useState(false);
    const [checkHepatitisOrJaundice, setCheckHepatitisOrJaundice] = useState(false);
    const [checkHIV, setCheckHIV] = useState(false);
    const [checkVenerealDiseases, setCheckVenerealDiseases] = useState(false);

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
        <div className="w-full h-full flex flex-col gap-12 pb-20">
            <div className="flex flex-col gap-10">
                <h1 className="text-xl font-md">Informações pessoais</h1>
                <div className="grid grid-cols-3 gap-6 items-end">
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
                <div className="grid grid-cols-3 gap-6 items-end">
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
                <div className="flex flex-col gap-8 justify-end">
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

                    <InputYesNo
                        label="Tem algum tipo de alergia a medicamentos, drogas ou alimentos?"
                        checkValue={checkAllergy}
                        setCheckValue={setCheckAllergy}
                        questionText="Qual?"
                        questionValue={questionAllergy}
                        setQuestionValue={setQuestionAllergy}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Já foi internado?"
                        checkValue={checkHospitalized}
                        setCheckValue={setCheckHospitalized}
                        questionText="Qual foi o motivo?"
                        questionValue={questionHospitalized}
                        setQuestionValue={setQuestionHospitalized}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Já fez alguma cirurgia?"
                        checkValue={checkSurgery}
                        setCheckValue={setCheckSurgery}
                        questionText="Qual foi o motivo?"
                        questionValue={questionSurgery}
                        setQuestionValue={setQuestionSurgery}
                    >
                    </InputYesNo>

                    <FormsInputSelect
                        label="Sua pressão geralmente é:"
                        options={BloodPressureList}
                        value={bloodPressure}
                        setValue={setBloodPressure}
                        validateField={validate.validateNotEmpty}
                    />

                    <InputYesNo
                        label="Sente falta de ar com frequência?"
                        checkValue={checkAir}
                        setCheckValue={setCheckAir}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Urina mais de 6 vezes ao dia?"
                        checkValue={checkUrinate}
                        setCheckValue={setCheckUrinate}
                    >
                    </InputYesNo>

                    <FormsInput
                        label="Quantas vezes por dia alimenta-se?"
                        type="text"
                        validateField={validate.validateNotEmpty}
                        spellCheck={true}
                        setValue={setFeed}
                        value={feed}
                    />

                    <FormsInputSelect
                        label="Quando se corta há um sangramento: "
                        options={BleedingList}
                        value={bleeding}
                        setValue={setBleeding}
                        validateField={validate.validateNotEmpty}
                    />

                    <FormsInputSelect
                        label="Sua cicatrização é: "
                        options={HealingList}
                        value={healing}
                        setValue={setHealing}
                        validateField={validate.validateNotEmpty}
                    />

                    <InputYesNo
                        label="Gestante?"
                        checkValue={checkPregnant}
                        onlyNumbers={true}
                        setCheckValue={setCheckPregnant}
                        questionText="Quantas semanas?"
                        questionValue={questionPregnant}
                        setQuestionValue={setQuestionPregnant}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Amamentando?"
                        checkValue={checkBreastfeed}
                        setCheckValue={setCheckBreastfeed}
                    >
                    </InputYesNo>

                    <InputYesNo
                        label="Está tomando anticoncepcional?"
                        checkValue={checkContraceptive}
                        setCheckValue={setCheckContraceptive}
                    >
                    </InputYesNo>

                    <div className="flex flex-col gap-5">
                        <p>Tem ou já teve as doenças/patologias abaixo?</p>

                        <div className="flex flex-col gap-5 ps-10">
                            <InputYesNo
                                label="Infarto/arteriosclerose"
                                checkValue={checkHeartAttackOrArteriosclerosis}
                                setCheckValue={setCheckHeartAttackOrArteriosclerosis}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Pressão Sanguínea Alta"
                                checkValue={checkHighBloodPressure}
                                setCheckValue={setCheckHighBloodPressure}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Problemas circulatórios (prolapso da v. mitral)"
                                checkValue={checkCirculatoryProblems}
                                setCheckValue={setCheckCirculatoryProblems}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Problemas nervosos"
                                checkValue={checkNervousProblems}
                                setCheckValue={setCheckNervousProblems}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Radio/Quimioterapia"
                                checkValue={checkRadioOrChemotherapy}
                                setCheckValue={setCheckRadioOrChemotherapy}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Anemia"
                                checkValue={checkAnemia}
                                setCheckValue={setCheckAnemia}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Artrite"
                                checkValue={checkArthritis}
                                setCheckValue={setCheckArthritis}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Perda/ganho de peso - 5kg +"
                                checkValue={checkWeightLossOrGain}
                                setCheckValue={setCheckWeightLossOrGain}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Asma/Bronquite"
                                checkValue={checkAsthmaOrBronchitis}
                                setCheckValue={setCheckAsthmaOrBronchitis}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Diabetes"
                                checkValue={checkDiabetes}
                                setCheckValue={setCheckDiabetes}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Marca-passo ou prótese cardíaca"
                                checkValue={checkCardiacPacemakerOrCardiacProsthesis}
                                setCheckValue={setCheckCardiacPacemakerOrCardiacProsthesiss}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Tuberculose"
                                checkValue={checkTuberculosis}
                                setCheckValue={setCheckTuberculosis}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Tratamento Psiquiátrico"
                                checkValue={checkPsychiatricTreatment}
                                setCheckValue={setCheckPsychiatricTreatment}
                            >
                            </InputYesNo>
                            
                            <InputYesNo
                                label="Epilepsia"
                                checkValue={checkEpilepsy}
                                setCheckValue={setCheckEpilepsy}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Desmaios/convulsões"
                                checkValue={checkFaintingOrConvulsions}
                                setCheckValue={setCheckFaintingOrConvulsions}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Problemas da glândula tireóidea"
                                checkValue={checkThyroidGland}
                                setCheckValue={setCheckThyroidGland}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Neoplasias/câncer"
                                checkValue={checkNeoplasmsOrCancer}
                                setCheckValue={setCheckNeoplasmsOrCancer}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Úlcera gástrica"
                                checkValue={checkGastricUlcer}
                                setCheckValue={setCheckGastricUlcer}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Derrames cerebrais"
                                checkValue={checkStrokes}
                                setCheckValue={setCheckStrokes}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Febre reumática"
                                checkValue={checkRheumaticFever}
                                setCheckValue={setCheckRheumaticFever}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Problemas de fígado"
                                checkValue={checkLiver}
                                setCheckValue={setCheckLiver}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Hepatite/Icterícia"
                                checkValue={checkHepatitisOrJaundice}
                                setCheckValue={setCheckHepatitisOrJaundice}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Portador de HIV"
                                checkValue={checkHIV}
                                setCheckValue={setCheckHIV}
                            >
                            </InputYesNo>

                            <InputYesNo
                                label="Doenças venéreas"
                                checkValue={checkVenerealDiseases}
                                setCheckValue={setCheckVenerealDiseases}
                            >
                            </InputYesNo>
                        </div>


                    </div>
                    
                </div>
            </div>
        </div>
    )
}