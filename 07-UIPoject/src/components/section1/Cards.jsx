import { RiArrowRightLine } from "@remixicon/react"

function Cards(props) {
  return (
    <div
        className="relative h-full w-1/3 flex flex-col rounded-4xl overflow-hidden bg-cover bg-center shrink-0"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${props.img}')` }}>

        <div className="h-full flex flex-col p-10 justify-between">
            <h2 className="text-4xl font-bold bg-white h-12 w-12 flex items-center justify-center rounded-full">{props.idx}</h2>

            <p className="text-white mt-40 tracking-wider">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius veniam tempore ducimus sit iure quis veritatis esse ipsum sunt tempora!</p>

            <div className="flex flex-row justify-between mb-5">
                <div className="text-white h-10 w-auto rounded-2xl text-2xl flex justify-center items-center " style={{ backgroundColor: props.color }}>
                {props.tag}
                </div>
                <div className="text-white h-10 w-10 rounded-full flex justify-center items-center" style={{ backgroundColor: props.color }}>
                    <RiArrowRightLine size={40} />
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Cards