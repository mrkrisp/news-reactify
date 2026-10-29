import styles from './styles.module.css'

export function Skeleton({count=1, type="banner"}) {
	return (
		<>
			{count > 1 ? (
				<ul className={styles.list}>
					{[...Array(count)].map((_, i) => (
						<li className={type === 'banner' ? styles.banner : styles.item} key={i}>
						</li>
					))}
				</ul>
			) : (
				<li className={type === 'banner' ? styles.banner : styles.item}>
				</li>
			)}
		</>
	)
}
