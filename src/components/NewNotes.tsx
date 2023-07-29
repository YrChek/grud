export default function NewNotes({ setDataForm, add, value }: Props) {

  const handlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDataForm(e.target.value)
  }

  return (
    <div className="newNotes">
      <form>
        <textarea name="forma" className="textarea" onChange={handlerChange} value={value}></textarea>
        <button className="btn" type="button" onClick={add}>&#10148;</button>
      </form>
    </div>
  )
}

type Props = {
  setDataForm: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  add: () => void
}