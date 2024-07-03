"use client"

import { useState } from "react";

import ExtendedNav from "./extendedNav";
import NavLink from "./navLink";
import RulesTools from './rulesTools';
import ChapterList from "./chapterList";




export default function TopNav({ }: Readonly<{}>) {

  const [ hovering, setHovering ] = useState<string | null>(null);
  const [ hoverDisplay, setHoverDisplay ] = useState<string | null>(null);

  const onHover = (target: "string" | null ) => {
    console.log(`target: ${target}`);
    
    setHovering(target)
    if (target) setHoverDisplay(hovering);
    else
      setTimeout(() => {
        console.log(`in timeout target: ${hovering}`);

        setHoverDisplay(hovering);
      }, 100);
  };

  return (
    <div className="border-2 border-white" onMouseOut={() => onHover(null)}>
      <ul className="flex justify-evenly">
        <NavLink title="Rules" target="rules" onHover={onHover} currentHover={hovering} />
        <NavLink title="Characters" target="characters" onHover={onHover} currentHover={hovering} />
        <NavLink title="Offline Tools" target="offline-tools" onHover={onHover} currentHover={hovering} />
      </ul>
      <ExtendedNav
        hoverDisplay={hoverDisplay}
        onHover={onHover}
        title={"Rules"}>
        <ChapterList
              onHover={onHover} />
        <RulesTools
              onHover={onHover} />
      </ExtendedNav>
    </div>
  );
}
