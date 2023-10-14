import styles from "./greeting.module.css"

export interface GreetingProps {

}
const Greeting = (props : GreetingProps) => {
    const intro = 'Hei Anna'
    const body = 'Congrats on getting 1 year older, here´s a tune im sure you would love.'
    const wishes = 'Best wishes'
    const sender = 'Seeru'

    return (
        <div className={styles.container}>
            <p className={styles.intro}>{intro}</p>
            <p className={styles.body}>{body}</p>
            <p className={styles.wishes}>{wishes}</p>
            <p className={styles.sender}>{sender}</p>
        </div>
    )
}

export default Greeting;