import { RiH2 } from "react-icons/ri";
import { NavLink } from "react-router-dom";


export default function Footer() {

    return(
        <div className=" flex bg-[#1E3B75] pt-10 px-5 pb-1  text-white flex-col w-full">
            <div className="flex w-full justify-between mb-12">
                <div>
                    <img src="/LOGO.svg" alt="VrumDrive logo"
                    className="w-40"
                    />
                </div>
                <div className="flex justify-between gap-5 mr-4">
                    <div className="flex flex-col items-start ">
                        <NavLink to="/" className="text-center font-bold mb-3 text-lg">Home</NavLink>
                        <h2>Nossos beneficios</h2>
                        <h2>Politica de preços</h2>
                        <h2>Avaliação dos clientes</h2>
                        <h2>FAQ</h2>
                    </div>

                    <div className="flex flex-col items-start ">
                        <NavLink to="/" className="text-center font-bold mb-3 text-lg">Process</NavLink>
                        <h2>Nossos beneficios</h2>
                        <h2>Politica de preços</h2>
                        <h2>Avaliação dos clientes</h2>
                    </div>

                    <div className="flex flex-col items-start ">
                        <NavLink to="/" className="text-center font-bold mb-3 text-lg">Carros</NavLink>
                        <h2>Nossos beneficios</h2>
                        <h2>Politica de preços</h2>
                        <h2>Avaliação dos clientes</h2>
                    </div>

                    <div className="flex flex-col items-start ">
                        <NavLink to="/" className="text-center font-bold mb-3 text-lg">Sobre nós</NavLink>
                        <h2>Nossos beneficios</h2>
                        <h2>Politica de preços</h2>
                    </div>
                </div>
            </div>
                <h3 className="font-mono text-sm tracking-tighter font-semibold">@2023 VrumDrive, Todos os direitos reservados.</h3>
        </div>
    )
}