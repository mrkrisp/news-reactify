import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { NewsList } from '../../components/NewsList/NewsList'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import styles from './styles.module.css'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      async function fetchNews() {
        setIsLoading(true)
        try {
          const news = await getNews()
          setNews(news.news)
          setIsLoading(false)
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchNews()
    }, [])


    return (
        <main className={styles.main}>
            {!isLoading ? (
              <>
                <NewsBanner item={news[0]} />
                <NewsList news={news} />
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