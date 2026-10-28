import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { NewsList } from '../../components/NewsList/NewsList'
import styles from './styles.module.css'

const API_KEY = "6EZhXR3ph39mQBx3gQ9GCGkR7HC2w3jNI7IsUpmYYw0UQgLb"

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
                <h2>Loading...</h2>
            )}
           
        </main>
    )
}

export default Main;