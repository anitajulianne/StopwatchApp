import styles from './Timer.module.scss'

const Timer = props => {
    return (
        <div>
            <span className={styles.timer}>{("0" + Math.floor((props.time / 3600000) % 24)).slice(-2)}:</span>
            <span className={styles.timer}>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
            <span className={styles.timer}>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
            <span className={styles.timer}>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </div>
    )
}

export default Timer;