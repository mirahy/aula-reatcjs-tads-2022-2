
type CepProps = {
    cep:string
}

export async function getCep({cep}:CepProps) {
    try {

        console.log('viacep.com.br/ws/'+{cep}+'/json/')
    let response = await fetch('viacep.com.br/ws/'+{cep}+'/json/')
    let dados = await response.json()
    return dados
    } catch (error) {
        return []        
    }
}