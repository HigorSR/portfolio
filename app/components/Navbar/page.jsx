import styles from '../../page.module.css'

export default function Navbar() {
   return (
      <div className={styles.navbar}>
         <section className={styles.name}>
            <p>Higor.dev</p>
         </section>
         <section className={styles.links}>
            <p>Início</p>
            <p>Sobre</p>
            <p>Projetos</p>
            <p>Contatos</p>
         </section>
      </div>
   )
}
