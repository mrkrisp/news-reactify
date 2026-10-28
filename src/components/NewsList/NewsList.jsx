import { NewsCard } from '../NewsCard/NewsCard'
import styles from './styles.module.css'

export function NewsList({news}) {
	return <ul className={styles.list}>
		{news.map(newsItem => (
			<NewsCard key={newsItem.id} {...newsItem} />
		))}
	</ul>
}
