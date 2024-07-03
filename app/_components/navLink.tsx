import Link from 'next/link';

export default function NavLink({title, target, onHover, currentHover} : {title: string, target: string, onHover: Function, currentHover: string | null}) {  
  let conditionalStyle = currentHover === title 
    ? "text-xl font-bold"
    : "";

  return (
    <li className={conditionalStyle} onMouseOver={() => onHover(title)} ><Link href={target}>{title}</Link>
    </li>
  );
}