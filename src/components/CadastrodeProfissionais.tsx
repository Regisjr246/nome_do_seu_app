import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import styles from '../App.module.css'
import Footer from './Footer';


const CadastroProficional = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataDeNascimento, setdataDeNascimento] = useState<string>("")
    const [localidade, setlocalidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [salario, setSalario]= useState<string>("");
    const[erro, setErro]=useState<string>("")


    
    const findCep = (e: FormEvent) => {

        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/',
            {
                method: 'GET'
            }
        ).then(response => response.json())
            .then(
                data => {
                    console.log(data);

                    setlocalidade(data.localidade);
                    
                    // setCep(data.cep);
                    setEstado(data.uf);


                }
            )


    }

    const cadastrarUsuarioProficional = (e: FormEvent) => {
        e.preventDefault();
        const dados = {
            nome: nome,
            email: email,
            celular:celular,
            cpf: cpf,
            dataNascimento: dataDeNascimento,
            cidade: localidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password,
            salario:salario
        }

        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/cadastroProfissional', dados, {
            headers:
                { "Accept": "application/json", "Content-Type": "application/json" }
        }).then(function (response) {
           window.location.href = "ListagemProficional"
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        if (e.target.name==="celular"){
            setCelular(e.target.value);
        }
        if (e.target.name==="dataDeNascimento"){
            setdataDeNascimento(e.target.value);
        }
        if (e.target.name=="localidade"){
            setlocalidade(e.target.value);
        }
        if(e.target.name =="estado"){
            setEstado(e.target.value);
        }
        if(e.target.name=="pais"){
            setPais(e.target.value);
        }
        if(e.target.name=="rua"){
            setRua(e.target.value);
        }
        if(e.target.name=="numero"){
            setNumero(e.target.value);
        }
        if(e.target.name=="bairro"){
            setBairro(e.target.value);
        }
        if(e.target.name=="cep"){
            setCep(e.target.value);
        }
        if(e.target.name=="complemento"){
            setComplemento(e.target.value);
        }
        if(e.target.name=="salario"){
            setSalario(e.target.value);
        }
    }

    return (
<div>
          <Header/>     

<main className={styles.main}>
            <div className='container'>
                
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Cadastrar Profisional</h5>
                        <form onSubmit={cadastrarUsuarioProficional} className='row g-3'>
                            <div className='col-6'>
                                <label htmlFor="nome" className='form-label'>Nome</label>
                                <input type="text" name='nome' className='form-control' required onChange={handleState} placeholder='ex: Torss' />
                            </div>
                            <div className='col-6'>
                                <label htmlFor="email" className='form-label' >E-mail</label>
                                <input type="email" name='email' className='form-control' required onChange={handleState}   placeholder='ex: xxxx@gmail.com'/>

                            </div>
                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>CPF</label>
                                <input type="text" name='cpf' className='form-control' placeholder='ex: 11111111111' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>Data de Nascimento</label>
                                <input type="date" name='dataDeNascimento' className='form-control' required onChange={handleState} />
                            </div>


                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Cep</label>
                                <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState}  placeholder='Só  numeros'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>Estado</label>
                                <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState}  placeholder='ex:SP'/>
                            </div>

                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>Cidade</label>
                                <input type="text" value={localidade} id='localidade' name='localidade' className='form-control' required onChange={handleState} placeholder='Presidente Prudente'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Celular</label>
                                <input type="text" name='celular' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Pais</label>
                                <input type="text" name='pais' className='form-control' required onChange={handleState} placeholder='ex: Brasil'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Rua</label>
                                <input type="text" name='rua' className='form-control' required onChange={handleState} placeholder='ex: paulo dragon'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Numero</label>
                                <input type="text" name='numero' className='form-control' required onChange={handleState} placeholder='ex: Apenasnumeros'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Bairro</label>
                                <input type="text" name='bairro' className='form-control' required onChange={handleState} placeholder='ex: almirante'/>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Complemento</label>
                                <input type="text" name='complemento' className='form-control' required onChange={handleState}placeholder='ex: quinta rua' />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="password" className='form-label'>Senha</label>
                                <input type="password" name='password' className='form-control' required onChange={handleState} placeholder='numeros, caracteres,simbolos' />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="salario" className='form-label'>Salário</label>
                                <input type="decimal" name='salario' className='form-control' required onChange={handleState} placeholder='ex: 2000.00'/>
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
<Footer/>
    </div>
);
}

export default CadastroProficional;