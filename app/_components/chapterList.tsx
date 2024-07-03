
import ToolButton from "./toolButton";
import { rules } from "../_documentation";

export default function ChapterList({onHover} : {onHover: Function}) {

  console.log(rules);
  
  return (
    <div className="rulesToolsContainer">
      <p className="text-l font-bold"><u>Rules</u></p>
   
    </div>
  )
}