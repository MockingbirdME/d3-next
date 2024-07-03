
import ToolButton from "./toolButton";

export default function RulesTools({onHover} : {onHover: Function}) {
  return (
    <div className="rulesToolsContainer">
      <p className="text-l font-bold"><u>Browse Categories</u></p>
      <ul className="ml-2">
          <ToolButton
            onHover={onHover}
            name="Backgrounds"
            target="/backgrounds"
          />
          <ToolButton
            onHover={onHover}
            name="Strains"
            target="/strains"
          />
          <ToolButton
            onHover={onHover}
            name="Traits"
            target="/traits"
          />
          <ToolButton
            onHover={onHover}
            name="Skill Checks"
            target="/skill checks"
          />
          <ToolButton
            onHover={onHover}
            name="Combat Actions"
            target="/combat actions"
          />
          <ToolButton
            onHover={onHover}
            name="Equipment"
            target=""
          />
          <ToolButton
            onHover={onHover}
            name="Arcane Powers"
            target=""
          />
       </ul>
    </div>
  )
}