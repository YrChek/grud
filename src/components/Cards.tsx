import Card from "./Card";

export default function Cards({ data, remove }: Props) {


  return (
    <div className="cards">
      {data.map((el) => <Card card={el} key={el.id} remove={remove}/>)}
    </div>
  )
}

type Props = {
  data: {
    id: number;
    content: string
  }[];
  remove: (id: number) => Promise<void>
}

