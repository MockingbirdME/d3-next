import Link from 'next/link';

import RulesTools from './rulesTools';

export default function ExtendedNav({title, hoverDisplay, onHover, children} : {title: string, hoverDisplay: string | null, onHover: Function, children: React.ReactNode}) {
  
  let hoveredClass = hoverDisplay === title ? "extendedNav__container" : "hidden";

  return (
    <div
        className={hoveredClass}
        onMouseOver={() => onHover(title)}
        // onMouseOut={() => onHover(null)}
    >
        <div className="flex justify-evenly">
            {/* <ChapterList
                onHover={onHover} /> */}
            {children}
            <h3>Something here</h3>
        </div>

    </div>
)
}