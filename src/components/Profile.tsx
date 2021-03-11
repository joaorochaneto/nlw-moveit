import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/661736066953560064/c-SPsFNN_400x400.jpg" alt="JR" />
            <div>
                <strong>João Rocha</strong>
                <p> <img src="icons/level.svg" alt="Level" /> Level 1</p>
            </div>
        </div>
    )
}