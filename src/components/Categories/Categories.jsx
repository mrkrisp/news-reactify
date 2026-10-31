import styles from './styles.module.css'

const Categories = ({categories, onClickCategory, selectedCategory}) => {
    return (
        <div className={styles.categories}>
           {categories.map(category => (
            <button 
              key={category}
              className={selectedCategory === category ? styles.active : styles.item}
              onClick={() => onClickCategory(category)}
              disabled={selectedCategory === category}
            >
                {category}
            </button>
           ))}
        </div>
    )
}

export default Categories;