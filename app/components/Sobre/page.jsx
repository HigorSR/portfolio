import styles from '../../page.module.css'
import Image from 'next/image'
import work from '../../assets/work.jpg'

export default function Sobre() {
   return (
      <div className={styles.sobre}>
         <div className={styles.textsobre}>
            <h2 className={styles.titlesobre}>Sobre Mim</h2>
            <p>Me chamo Higor Rocha e sou desenvolvedor Front-End. Atualmente no último ano da faculdade de Ciência da Computação e em busca de uma vaga como programador Junior. Tenho conhecimentos em projetos desenvolvidos React e Next, tanto em JavaScript quanto em TypeScript. Além disso faço uso do Tailwind e do Sass nos meus projetos, assim como ferramentas de versionamento de código, como o Git.</p>
            <p>Possuo vontade de aprender e disposição em buscar novos conhecimentos por conta própria. Também prezo por um bom trabalho em equipe e um hambiente próspero com os meus futuros colegas de trabalho.</p>
         </div>
         <div className={styles.contimg}>
            <Image src={work} alt='Imagem de ambiente de trabalho de um programador' className={styles.imgalet}/>
         </div>
      </div>
   )
}