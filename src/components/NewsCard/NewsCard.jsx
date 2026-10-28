import { formatTimeAgo } from '../../helpers/formatTImeAgo'
import styles from './styles.module.css'

export function NewsCard({image, title, published, author}) {
	return <li className={styles.item}>
		<div className={styles.wrapper} style={{backgroundImage: `url(${image})`}} />
		<div className={styles.info}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(published)} by {author}
			</p>
		</div>
	</li>
}
