export async function getUsers() {
            try {
            let response = await fetch('https://randomuser.me/api/?results=6&nat=br')
            let dados = await response.json()
            return dados
            } catch (error) {
                return []        
            }
        }