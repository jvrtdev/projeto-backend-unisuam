import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink , useNavigate } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { schemaForm } from './shemaCadastro';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod"
import {ToastContainer , toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

type Inputs = z.infer<typeof schemaForm>

export default function CadastroForm() {
  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm<Inputs>({
    resolver: zodResolver(schemaForm)
  })
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmited = async (data: any) => {
    try{
        const response = await axios.post("api", data);
        console.log(response.data)
        toast.success("Cadastro realizado")
        navigate("/")
    }
    catch(error){
        console.error(error)
        toast.error("Credenciais invalidas")
    }
}

  return (
      <form action='' method='POST' onSubmit={handleSubmit(handleSubmited)} >
      <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="w-full lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/form-img.jpg')",
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0, 0, 0, 0.184)",
          minHeight: "300px" 
        }}
      >
        <div className="flex flex-col justify-center h-full lg:p-12 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Descubra um mundo de possibilidades com a Vrum Drive
          </h2>
          <div className="text-xl lg:text-2xl">Maximize sua viagem com facilidade e eficiência.</div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center bg-gray-100">
        <div className="max-w-md mx-auto p-6 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Vrum Drive</h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            Pronto para otimizar sua viagem? Venha conhecer a Vrum Drive!
          </p>
          <div className="space-y-6 relative">
          <div  >
              <label className="block text-sm lg:text-base font-medium text-gray-700" htmlFor="email">
                Nome
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input className="block w-full pr-10 bg-[#00000095]" 
                id="text" 
                placeholder="digite seu nome" 
                type="nome"  
                {...register("name")}
                 />
                 {errors.name && <span className='text-black' >{errors.name.message} </span>}
              </div>
            </div>
            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input className="block w-full pr-10 bg-[#00000095]" 
                id="email" 
                placeholder="exemplo@gmail.com" 
                type="email" 
                {...register("email")}
                />
                {errors.email && <span className='text-black' >{errors.email.message}</span>}
              </div>
            </div>
            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700" htmlFor="password">
                Senha
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input className="block w-full pr-10 bg-[#00000095]" 
                id="password" 
                placeholder="********" 
                type={showPassword ? "text" : "password"} 
                {...register("password")}
                />
                 {errors.password && <span className='text-black' >{errors.password.message}</span>}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    color: "#8B0000",
                  }}
                >
                  {showPassword ? (
                    <RiEyeOffFill size={20} />
                  ) : (
                    <RiEyeFill size={20} />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button className="bg-[#bd1e59] hover:bg-amber-800 text-white w-full lg:w-auto" variant={'secondary'}>Entrar</Button>
            </div>
            <div className="text-center">
              <NavLink to="/login" className="text-[#bd1e59] hover:to-blue-900"> Já possui uma conta? Clique aqui</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer  
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
    />
      </form>
  )
}
