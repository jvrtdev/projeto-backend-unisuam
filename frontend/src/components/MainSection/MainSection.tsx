import { Button } from "@/components/ui/button"

export default function MainSection() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-white text-5xl font-bold mb-6 text-start">Explore o Futuro da Mobilidade com a Vrum Vrum Drive</h1>
            <p className="text-white mb-6">Alugue Veículos Elétricos e Adote um Transporte Sustentável</p>
            <Button className="bg-white text-[#bd1e59]" variant={"outline"}>Encontre seu Veículo</Button>
          </div>
          <div className="text-white">
            <p className="mb-2">
              Alugar veículos elétricos (EVs) oferece uma excelente oportunidade para adotar um transporte sustentável.
              Optando por veículos elétricos, indivíduos podem contribuir para a redução das emissões de carbono e minimizar
              seu impacto ambiental.
            </p>
            <div className="flex justify-around bg-slate-500 p-2 rounded-xl">
              <div className="text-center">
                <h2 className="text-xl font-bold md:text-3xl">100+</h2>
                <p className="font-light text-sm md:text-base">Clientes Satisfeitos</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold md:text-3xl">100+</h2>
                <p className="font-light text-sm md:text-base">Carros Eletricos</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold md:text-3xl">100+</h2>
                <p className="font-light text-sm md:text-base">Clientes Felizes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <img
            alt="Veículo Elétrico"
            className="mx-auto"
            height="500"
            src="/car.jpg"
            style={{
              aspectRatio: "500/300",
              height: "auto",
              maxWidth: "100%",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
      </div>
    </div>
  )
}
