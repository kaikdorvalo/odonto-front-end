import { FormCadastroPaciente } from "../components/components/cadastro-paciente/form-cadastro-paciente";
import { PageDefault } from "../components/components/page-structure/page-default";


export const CadastroPaciente = () => {

    return (
        <PageDefault
            photoUrl="https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/201902/volkswagen-jetta-gli-150.jpg"
            name="Kaik Dorvalo"
            defaultSelectedIndex={1}
        >
            <div className="w-full pb-20">
                <FormCadastroPaciente></FormCadastroPaciente>
            </div>
        </PageDefault>
    )
}