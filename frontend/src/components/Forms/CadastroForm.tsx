import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';


export default function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <form action='' method='' >
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            Descubra um mundo de possibilidades com a Vrum Drive
          </h1>
          <p className="text-xl lg:text-2xl">Maximize sua viagem com facilidade e eficiência.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center bg-gray-100">
        <div className="max-w-md mx-auto p-6 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Vrum Drive</h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            Pronto para otimizar sua viagem? Venha conhecer a Vrum Drive!
          </p>
          <div className="space-y-6 relative">
            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input className="block w-full pr-10" id="email" placeholder="exemplo@gmail.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700" htmlFor="password">
                Senha
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input className="block w-full pr-10" id="password" placeholder="********" type={showPassword ? "text" : "password"} />
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
              <Button className="bg-[#bd1e59] text-white w-full lg:w-auto" variant={'secondary'}>Entrar</Button>
            </div>
            <div className="text-center">
              <NavLink to="/login" className="text-[#bd1e59] hover:to-blue-900"> Já possui uma conta? Clique aqui</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
      </form>
  )
}
