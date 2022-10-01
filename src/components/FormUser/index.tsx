import { KeyboardEvent, useEffect, useState } from "react";
import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import { getCep } from "../../api/cep";
import { FormUserStyle } from './styled';
import { BeatLoader } from "react-spinners";


export function FormUser() {

    const [cep, setCep] = useState('01001000')
    const [isLoading, setIsLoading] = useState(false)
    const [endereco, setEndereco] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')

    
    const listAdress = async () =>{
        const address = await getCep(cep)
        setEndereco(address.logradouro)
        setLocalidade(address.localidade)
        setUf(address.uf)
        setIsLoading(false)  
    }

    useEffect(()=>{
        listAdress()
    },[])
    let text =''
    function handleChange(event) {
        
        if (event.key === "Enter") {
            setIsLoading(true) 
            listAdress()
          }else{
            text = event.target.value;
            setCep(text)

          }
          
      }


    return (
        <FormUserStyle>
            <Form>
                <Row>
                    <h3>Cadastro Clientes</h3>
                </Row>
                    <Form.Group className="mb-12" controlId="formBasicName">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control type="text" placeholder="Digite seu Nome" />
                    </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicRG">
                            <Form.Label column>RG: </Form.Label>
                            <Form.Control type="text" placeholder="RG" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCPF">
                            <Form.Label column>CPF: </Form.Label>
                            <Form.Control type="text" placeholder="CPF" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicDTNascimento">
                            <Form.Label column>Data de Nascimento: </Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                {isLoading ? <BeatLoader color="#c536d6"/> : ''}
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCEP">
                            <Form.Label column>CEP: </Form.Label>
                            <Form.Control type="text" placeholder="CEP"  onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col xs={8}>
                        <Form.Group className="mb-3" controlId="formBasicEndereco">
                            <Form.Label column>Endereço: </Form.Label>
                            <Form.Control type="text" placeholder="Endereço" value={endereco} onChange={()=>{}}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCidade">
                            <Form.Label>Cidade: </Form.Label>
                            <Form.Select aria-label="Default select example" >
                                <option>{localidade ? localidade : 'Selecione a cidade'}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEstado">
                            <Form.Label>Estado: </Form.Label>
                            <Form.Select aria-label="Default select example" >
                                <option>{uf ? uf : 'Selecione o estado:'}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Salvar
                </Button>

            </Form>
        </FormUserStyle>
    )
}