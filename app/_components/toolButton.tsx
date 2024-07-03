import Link from 'next/link';

export default function ToolButton({name, target, onHover} : {name: string, target: string, onHover: Function}) {
  const onClick = () => {
    console.log('CLicked');
  }
  return (
          <Link href={target} className="toolButton hoverableNav" onClick={() => onHover(name)}>
              <h3>
                  {name}
              </h3>
          </Link>
  )
}