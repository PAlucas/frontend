import { useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import Api from '../../service/Api'
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import { useDisclosure } from '@chakra-ui/react'
import BoxM from '@mui/material/Box';
import {
    Flex,
    Box,
    Center,
    Button,
  } from "@chakra-ui/react";
import ModalModulo from '../../components/modulo/modal'
import CollapseTableAprendiz from "../../components/moduloAprendiz/collapseTableAprendiz";

function Modulo() {  
  const {register, handleSubmit, formState: { errors, isSubmitting }, reset} = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = (data) =>{
    let criarUsuario = {
        nome: data.name
    }
    Api.post('modulo/Cadastrar', criarUsuario)
    .then((res) => {
        alert(res.data)
        if(res.status === 200){
            reset();
        }
    })

  }

  return (
    <div className="container">
        <Navbar/>
        <div className="tabela">
            <BoxM
            sx={{
                width: 1300,
            }}
            >
                <CollapseTableAprendiz/>
            </BoxM>
        </div>
    </div>
  );
}

export default Modulo;