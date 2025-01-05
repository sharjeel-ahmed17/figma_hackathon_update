
import CardComponent from "./CardComponent"


const GridCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<CardComponent/>
<CardComponent/>
<CardComponent/>
<CardComponent/>


    </div>
  )
}

export default GridCard