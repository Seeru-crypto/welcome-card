import Image from 'next/image'
import styles from './page.module.css'
import Greeting from "@/components/Greeting/Greeting";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

export default function Home() {
  return (
      <div className={styles.container}>
          <div>
              <div className={styles.musicPlayer}>
                  <MusicPlayer />
              </div>
          </div>
          <div className={styles.greeting}>
              <Greeting />
          </div>
      </div>
  )
}
