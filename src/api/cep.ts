

export async function getCep(cep:String) {
    try {

        console.log('viacep.com.br/ws/'+cep+'/json/')
    let response = await fetch('viacep.com.br/ws/'+cep+'/json/')
    let dados = await response.json()
    return dados
    } catch (error) {
        return []        
    }
}