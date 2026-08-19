import LeftContent from "./LeftContent";
import RightContent from "./RightContent";


function Content() {
  return (
    <div className="flex flex-1 p-8 mt-4 pb-20">
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Content