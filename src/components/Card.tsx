export default function Card({ card, remove }:Props) {

  const handlerRemove = async() => {
    await remove(card.id)
  }

  return (
<div className="card">
  <div className="card_text">{card.content}</div>
  <div className="card_del" onClick={handlerRemove}>&times;</div>
</div>  )
}

type Props = {
  card: { 
    id: number;
    content: string
  };
  remove: (id: number) => Promise<void>
}
