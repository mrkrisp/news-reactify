import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { NewsList } from '../../components/NewsList/NewsList'
import { Pagination } from '../../components/Pagination/Pagination'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import styles from './styles.module.css'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const totalPages = 10
    const pageSize = 10

    useEffect(() => {
      async function fetchNews() {
        setIsLoading(true)
        try {
          const news = await getNews(page, pageSize)
          setNews(news.news)
          setIsLoading(false)
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchNews()
    }, [page])


    return (
        <main className={styles.main}>
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