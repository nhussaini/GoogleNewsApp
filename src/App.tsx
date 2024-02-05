import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader';
import Header from './components/Header';
import { RssItem, NewsItem } from './models/data.model';
import NewsList from './components/NewsList';

function App() {
  const [loading, setLoading] = useState(true);
  const [rssInfo, setRssInfo] = useState<RssItem | null>(null);
  //useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.journey.skillreactor.io/r/f/rss.xml'
        );
        // console.log('response=>', response.data);
        setLoading(false);
        const xmlData = response.data;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        console.log('parser xml data=>', xmlDoc);
        const title =
          xmlDoc.querySelector('channel > title')?.textContent || '';
        const lastBuildDate =
          xmlDoc.querySelector('channel > lastBuildDate')?.textContent || '';
        const link = xmlDoc.querySelector('channel > link')?.textContent || '';

        const sources = Array.from(
          xmlDoc.querySelectorAll('channel > item >source')
        ).map((source) => source.textContent || '');
        // console.log('sources====>', sources);

        const newsList: NewsItem[] = Array.from(
          xmlDoc.querySelectorAll('item')
        ).map((item) => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const guid = item.querySelector('guid')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description =
            item.querySelector('description')?.textContent || '';
          const source = item.querySelector('source')?.textContent || '';

          return { title, link, guid, pubDate, description, source };
        });
        // console.log('newsList=>', newsList);

        const rssItem: RssItem = {
          title,
          lastBuildDate,
          link,
          newsList,
          sources,
        };
        setRssInfo(rssItem);

        // const rssData: any[][] = [
        //   ['title', title],
        //   ['lastBuildDate', lastBuildDate],
        //   ['link', link],
        //   ['sources', [...sources]],
        // ];

        const jsonString: string = JSON.stringify(rssItem);
        localStorage.setItem('rssData', jsonString);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header
        link={rssInfo?.link}
        title={rssInfo?.title}
        lastBuildDate={rssInfo?.lastBuildDate}
      />
      {loading && <Loader />}
      <NewsList rssInfo={rssInfo} />
      {/* <h3>{rssData?.title}</h3> */}
    </div>
  );
}

export default App;
