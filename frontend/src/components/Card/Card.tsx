import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarFilledIcon } from "@radix-ui/react-icons";


interface CardProps{
    img: string;
    name: string;
    comment: string;
    stars: number;
    date: string;
}

export default function Card({img, name, comment, stars, date}:CardProps) {

    function numberStars(stars: number){
        const estrelas: any = []

        for(let i=1; i <= stars; i++){
            estrelas.push(<StarFilledIcon/>)
        }
        console.log(estrelas)
        return estrelas
    }
    


    return(
        <div className="w-[300px] h-[400px]  border-2 rounded-xl flex flex-col justify-between">
            <div className="p-4 flex flex-col h-full gap-10">
                <em className="text-end font-thin">{date}</em>
                <em className="font-thin">{comment}</em>
            </div>    


                <div className="w-full">
                    <div className="border-t-2 rounded-xl shadow-md flex items-center justify-between gap-2 p-3">
                        <div className="flex items-center gap-2">    
                            <Avatar>
                                <AvatarImage src={img} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p className="">{name}</p>
                        </div>

                        <div>
                            <span className="flex text-yellow-500 text-end">
                                {numberStars(stars)}
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
}