import { useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import Api from '../../service/Api'
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import {
    Flex,
    Box,
    Center,
    FormControl,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
    FormErrorMessage,
    Select,
    Checkbox, 
    CheckboxGroup
  } from "@chakra-ui/react";

function Acesso() {  
  const {register, handleSubmit, formState: { errors, isSubmitting }, reset} = useForm();
  const [usuario, setUsuario] = useState([]);

  function setUsuarioArray(array){
    setUsuario(array);
  }
  useEffect(()=>{
    const pegarClientes = async () =>{
        let usuariosAprendizReq = await Api.get('Usuario');
        let usuariosAprendizRes = await usuariosAprendizReq.data;
        setUsuarioArray(usuariosAprendizRes);
    }
    const pegarModulos = async () =>{
        let usuariosAprendizReq = await Api.get('Modulos');
        let usuariosAprendizRes = await usuariosAprendizReq.data;
        setUsuarioArray(usuariosAprendizRes);
    }
    pegarClientes();
  },[])
  const onSubmit = (data) =>{
    let criarUsuario = {
        id: data.name
    }
    // Api.post('usuario/Cadastrar', criarUsuario)
    // .then((res) => {
    //     alert(res.data)
    //     if(res.status === 200){
    //         reset();
    //     }
    // })
    console.log(criarUsuario);

  }

  return (
    <ChakraProvider>
        <Box h="100vh">
        <Navbar/>
        <Center
            as="header"
            h={150}
            bg="#060b26"
            color="white"
            fontWeight="bold"
            fontSize="4xl"
            pb="8"
        >
            Formulário
        </Center>
        <Flex
            align="center"
            justify="center"
            bg="#111"
            h="calc(100vh - 150px)"
        >
            <Center
            w="100%"
            maxW={840}
            bg="white"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
            >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl display="flex" flexDir="column" gap="4" isInvalid={errors.id}>
                    <HStack spacing="4">
                    <Box w="100%">
                        <FormLabel htmlFor="id">Nome</FormLabel>
                        <Select placeholder='Select option' {...register('id', {
                            required: 'This is required'})}>
                            {usuario.map((element)=>(
                                <option value={element.usu_id}>{element.nome}</option>
                            ))}
                        </Select>
                    </Box>
                    </HStack>
                    <HStack spacing="4">
                    <Box w="100%">
                        <FormLabel>Tipo</FormLabel>
                        <RadioGroup defaultValue="Aprendiz">
                        <HStack spacing="24px">
                            <Radio value="Administrador" borderColor='green' {...register('tipo')} >Administrador</Radio>
                            <Radio value="Aprendiz" borderColor='green' {...register('tipo')}>Aprendiz</Radio>
                        </HStack>
                        </RadioGroup>
                    </Box>
                    </HStack>
                    <HStack justify="center">
                    <Button
                        w={240}
                        p="6"
                        type="submit"
                        bg="teal.600"
                        color="white"
                        fontWeight="bold"
                        fontSize="xl"
                        mt="2"
                        _hover={{ bg: "teal.800" }}
                    isLoading={isSubmitting}  
                    >
                        Enviar
                    </Button>
                    </HStack>
                    <FormErrorMessage>
                        {errors.id && errors.id.message}
                    </FormErrorMessage>
                </FormControl>
            </form>
            </Center>
        </Flex>
        </Box>
    </ChakraProvider>

  );
}

export default Acesso;