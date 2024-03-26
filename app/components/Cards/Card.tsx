import Image from "next/image";

interface CardProps {
  item: {
    id: number;
    name: string;
    avatar: string;
  },
  cardSettings?:any 
}

export default function Card({ item, cardSettings }: CardProps ) {
  return (
    <div className={`${cardSettings.classes}`}>
        <Image
          width={cardSettings.width}
          height={cardSettings.heigth}
          src={item.avatar}
          alt="Sunset in the mountains"
        />
      {item.name}
    </div>
  );
}
