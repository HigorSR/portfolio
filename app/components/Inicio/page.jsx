import styles from '../../page.module.css'
import { MdWavingHand } from 'react-icons/md'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiGit, SiSass } from 'react-icons/si'

export default function Inicio() {
   return (
      <div className={styles.inicio}>
        <div className={styles.apresentacao}>
          <div>
            <h1>
              Olá, eu sou Higor Rocha{' '}
              <span>
                <MdWavingHand className={styles.iconhand} />
              </span>
            </h1>
            <h2 className={styles.titleh2}>Desenvolvedor Front-End</h2>
          </div>
          <div className={styles.foto}></div>
        </div>
        <div className={styles.tech}>
          <SiHtml5 className={styles.icontech}/>
          <SiCss3 className={styles.icontech}/>
          <SiJavascript className={styles.icontech}/>
          <SiTypescript className={styles.icontech}/>
          <SiReact className={styles.icontech}/>
          <SiTailwindcss className={styles.icontech}/>
          <SiSass className={styles.icontech}/>
          <SiGit className={styles.icontech}/>
        </div>
      </div>
   )
}