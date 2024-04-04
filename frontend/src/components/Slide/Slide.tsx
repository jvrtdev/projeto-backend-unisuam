import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Card from "../Card/Card";
  
  interface CardType{
    img: string;
    name: string;
    comment: string;
    stars: number;
    date: string;
}

  const Cards :CardType[] = [
    {
      img: '/LOGO.svg',
      name: 'Vitão',
      comment: '"Excelente experiência alugando um carro com esta locadora! O processo foi fácil, o carro estava em ótimo estado e a equipe foi super prestativa. Recomendo totalmente!"',
      stars: 3,
      date: '20/29/2003'
    },
    {
      img: '/bmw.png',
      name: 'Japa',
      comment: '"Fiquei muito satisfeito com o atendimento e a qualidade do veículo que aluguei. Tudo foi feito de forma rápida e eficiente. Com certeza alugarei com eles novamente."',
      stars: 4,
      date: '20/29/2003'
    },
    {
      img: '/fiat.png',
      name: 'Shark Boy',
      comment: '"Fiquei muito satisfeito com o atendimento e a qualidade do veículo que aluguei. Tudo foi feito de forma rápida e eficiente. Com certeza alugarei com eles novamente."',
      stars: 5,
      date: '20/29/2003'
    },
    {
      img: '/LOGO.svg',
      name: 'Vitão',
      comment: '"Excelente experiência alugando um carro com esta locadora! O processo foi fácil, o carro estava em ótimo estado e a equipe foi super prestativa. Recomendo totalmente!"',
      stars: 3,
      date: '20/29/2003'
    },
    {
      img: '/bmw.png',
      name: 'Japa',
      comment: '"Fiquei muito satisfeito com o atendimento e a qualidade do veículo que aluguei. Tudo foi feito de forma rápida e eficiente. Com certeza alugarei com eles novamente."',
      stars: 4,
      date: '20/29/2003'
    },
    {
      img: '/fiat.png',
      name: 'Shark Boy',
      comment: '"Fiquei muito satisfeito com o atendimento e a qualidade do veículo que aluguei. Tudo foi feito de forma rápida e eficiente. Com certeza alugarei com eles novamente."',
      stars: 5,
      date: '20/29/2003'
    },
  ]

export default function Slide():JSX.Element {
    return (
        <Carousel className="w-full max-w-5xl m-10">
            <CarouselContent className="">
              {Cards.map((card, index) => (
                <CarouselItem key={index}
                className="basis-1/3"
                >
                  <Card 
                  img={card.img}
                  name={card.name}
                  comment={card.comment}
                  stars={card.stars}
                  date={card.date}
                  />
                </CarouselItem>
                
              ))}

            </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext />
        </Carousel>
      )
    }
