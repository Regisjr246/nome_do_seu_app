import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from '../App.module.css'
//footer
//header
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

const CadastroCliente = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [localidade, setLocalidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const cadastrarCliente = (e: FormEvent) => {
        e.preventDefault();


        const dados = {
            nome: nome,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: localidade,
            estado: estado,
            celular: celular,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password

        }

        axios.post('http://127.0.0.1:8000/api/cadastroCliente',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then(function (response) {
            
            alert('cadastro realizado com sucesso')
         //   Swal.fire({
           //     title: "Cadastrado?",
             //   text: "Cliente cadastrado com sucesso",
             //   icon: "success"
             // });

            window.location.href = "/listagem"
        }).catch(function (error) {
            console.log(error)
            Swal.fire({
                title: "Erro no Cadastro",
                text: "Cliente não cadastrado ",
                icon: "error"
              });
        });
    }










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

                    setLocalidade(data.localidade);
                    
                    //setPais(data.pais);

                    setEstado(data.uf);


                }
            )


    }
    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name = "cep") {
            setCep(e.target.value);
        }

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
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name === "localidade") {
            setLocalidade(e.target.value);
        }
        if (e.target.name === "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        }
        if (e.target.name === "pais") {
            setPais(e.target.value);
        }
        if (e.target.name === "rua") {
            setRua(e.target.value);
        }
        if (e.target.name === "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name === "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
        if (e.target.name === "complemento") {
            setComplemento(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    return (
        <div>


                
<Header/>
<main className={styles.main}>
                <div className='container'>
                    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Clientes</h5>
                            <form onSubmit={cadastrarCliente} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} placeholder='ex: Torss' />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label' >E-mail</label>
                                    <input type="email" name='email' className='form-control' required onChange={handleState}  placeholder='ex: xxxx@gmail.com'/>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} placeholder='ex: 11111111111'/>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='form-label'>Data de Nascimento</label>
                                    <input type="date" name='dataNascimento' className='form-control' required onChange={handleState} />
                                </div>


                                <div className='col-4'>
                                    <label htmlFor="cep" className='form-label'>Cep</label>
                                    <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState} placeholder='Só  numeros'/>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState}placeholder='ex:SP' />
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" value={localidade} id='localidade' name='localidade' className='form-control' required onChange={handleState}placeholder='Presidente Prudente' />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros'/>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Pais</label>
                                    <input type="text" value={pais} name='pais'  id='pais' className='form-control'  required onChange={handleState} placeholder='ex: Brasil' />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState}placeholder='ex: Joao dragon' />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros'/>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState} placeholder='ex: renascer' />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} placeholder='ex: Quinta rua'/>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="password" name='password' className='form-control' required onChange={handleState} placeholder='numeros, caracteres,simbolos' />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default CadastroCliente;