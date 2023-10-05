import Link from "next/link"
import Image from "next/image"
import imgLogo from '../public/assets/logomarca.png'
export default function Home({children}:any){
  return(
    <main>
    
       <main className="conteinerHeade">
         <div className="itens-header">
            <Image src={imgLogo} width={50} height={50} alt="logomarca" priority={true}/>
            <h1>Chcoltt</h1>
         </div>
      </main> 
      <div>
      <Link href='layouthome'>Home</Link>
      <Link href='receitas'>receitas</Link>
      <Link href='compra'>Compra</Link>
      </div>
      {children}
    </main>
  )
}