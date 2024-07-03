import Link from 'next/link';


export default function PageHeader({ }: Readonly<{}>) {

  const userInterface = (
    <div>Placeholder for User Stuff</div>
  )
  return (
    <div className="flex justify-between items-center  my-6" >
      <Link href="/" className="w-56 flex justify-between items-center"><span className="text-3xl" >D3</span> <span className="text-l" >(a Role Playing System)</span></Link>      
      {userInterface}
    </div>
  );
}
