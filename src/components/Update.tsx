export default function Update({update}: Props) {

  return (
    <div className="update">
      <div className="update_text">Notes</div>
      <div className="update_image" onClick={update}>
        <img src="update.png" alt="" className="update_img"/>
      </div>
    </div>
  )
}

type Props = {
  update: () => void
}
