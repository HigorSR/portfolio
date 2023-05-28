import styles from './page.module.css'
import Navbar from './components/Navbar/page'
import Inicio from './components/Inicio/page'
import Sobre from './components/Sobre/page'
import Projetos from './components/Projetos/page'

export default function Home() {
  return (
    <main className={styles.body}>
      <Navbar />
      <Inicio />
      <Sobre />
      <Projetos />
    </main>
  )
}
