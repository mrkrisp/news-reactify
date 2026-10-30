import styles from './styles.module.css'

export function Pagination({totalPages, currentPage, onClickPage}) {
	return <div className={styles.pagination}>
		<button 
			onClick={() => onClickPage(prevPage => prevPage-1)} 
			disabled={currentPage===1}
			className={styles.arrow}
		>
			{"<"}
		</button>
		<div className={styles.list}>
			{[...Array(totalPages)].map((_, i) => (
				<button  
					onClick={() => onClickPage(i+1)} 
					key={i}
					className={styles.pageNumber}
					disabled={i+1 === currentPage}
				>
					{i+1}
				</button>
			))}
		</div>
		<button 
			onClick={() => onClickPage(prevPage => prevPage+1)} 
			disabled={totalPages===currentPage}
			className={styles.arrow}
		>	
			{">"}
		</button>
	</div>
}
