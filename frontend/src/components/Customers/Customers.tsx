import Slide from "../Slide/Slide";


export default function Customers() {

    return(
        <div className="w-full">
            <h1 className="text-5xl font-bold text-center">Nossos clientes felizes!</h1>
            <p className=" font-light text-center mt-2">Não apenas acredite em nossas palavras - leia o que nossos clientes satisfeitos têm a dizer!</p>
            <div className="flex items-center justify-center">
                <Slide />
            </div>    
        </div>
    )
}   