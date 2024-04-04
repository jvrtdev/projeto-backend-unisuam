import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2 className="font-Mont text-9xl font-bold text-amber-400 "  >Oops... Produto não encontrado =</h2>
      case 401:
        return <h2 className="font-Mont text-9xl font-bold text-green-700"   >Você não está autorizado a ver essa página.</h2>
      case 400:
        return <h2 className="font-Mont text-9xl font-bold text-red-700 "  >Parece que algo deu errado na requisição.</h2>
      case 500:
        return <h2  className="font-Mont text-9xl font-bold text-Amarelo "  >Erro interno no servidor.</h2>
    }
  }

  return <div className="flex justify-center items-center borde border-azul-celeste bg-black" >
      <h2 className="font-Mont text-9xl font-bold text-Amarelo " >Algo deu errado.</h2>
      <Link to="/" >Voltar para o inicio</Link>
  </div>
}