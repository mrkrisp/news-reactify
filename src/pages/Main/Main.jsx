import { useEffect, useState } from 'react'
import { getCategories, getNews } from '../../api/apiNews'
import Categories from '../../components/Categories/Categories'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { NewsList } from '../../components/NewsList/NewsList'
import { Pagination } from '../../components/Pagination/Pagination'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import styles from './styles.module.css'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [page, setPage] = useState(1)
    const totalPages = 10
    const pageSize = 10

    useEffect(() => {
      async function fetchNews() {
        setIsLoading(true)
        try {
          const news = await getNews({
            page_number: page, 
            page_size: pageSize, 
            category: selectedCategory === "All" ? null : selectedCategory
          })
          setNews(news.news)
          setIsLoading(false)
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchNews()
    }, [page, selectedCategory])

    useEffect(() => {
      async function fetchCategories() {
        try {
          const categoriesData = await getCategories()
          
          setCategories(["All", ...categoriesData])
        } catch (error) {
          console.log(error.message)
        }
      }

      fetchCategories()
    }, [])


    return (
        <main className={styles.main}>
           <Categories categories={categories} onClickCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            {!isLoading ? (
              <> 
                <NewsBanner item={news[0]} />
                <Pagination totalPages={totalPages} currentPage={page} onClickPage={setPage} />
                <NewsList news={news} />
                <Pagination totalPages={totalPages} currentPage={page} onClickPage={setPage} />
              </>
            ) : (
              <>
                <Skeleton />
                <Skeleton count={10} type='item' />
              </>
            )}  
           
        </main>
    )
}

export default Main;