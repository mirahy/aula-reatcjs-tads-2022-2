

export async function getCep(cep:string) {
    try {
    let response = await fetch(`viacep.com.br/ws/'${cep}'/json/`)
    let dados = await response.json()
    return dados
    } catch (error) {
        return []        
    }
}