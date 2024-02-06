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
  const [showFavourites, setShowFavourites] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  // const [uniqueSources, setUniqueSources] = useState<string[] | []>([]);

  //handle show favourites
  const handleShowFavouritesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log('check=>', event.target.checked);
  };

  //handle date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('selected date=>', event.target.value);
    setSelectedDate(event.target.value);
  };
  const replaceSpaceWithUnderscore = (sources: string[] = []) => {
    const nonDuplicates = Array.from(new Set([...sources]));
    const filteredSources = nonDuplicates.map((item) =>
      item.toLowerCase().replace(/\s+/g, '_')
    );
    return filteredSources;
  };

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
        // console.log('rssInfo sources=>', rssInfo?.sources);
        //pass rssInfo.sources to replace space with underscore
        // if (rssInfo) {
        //   const filteredSources = replaceSpaceWithUnderscore(rssInfo.sources);
        //   setUniqueSources(filteredSources);
        //   console.log('state for unique sources +++++>', uniqueSources);
        // }

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
      <div className="main">
        <NewsList rssInfo={rssInfo} />
        <div className="features">
          {/* checkbox for favourties */}
          <div>
            <input
              type="checkbox"
              id="show_favourites"
              checked={showFavourites}
              onChange={handleShowFavouritesChange}
            />
            <label htmlFor="show_favourites">Show Favourites</label>
          </div>
          {/* date filter */}
          <div>
            <label htmlFor="selected_date">Select Date:</label>
            <input
              type="date"
              id="selected_date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          {/* button to filter based on news sources */}
          <div>
            {rssInfo &&
              replaceSpaceWithUnderscore(rssInfo.sources).map((item) => {
                return (
                  <button id={`source_${item}`} key={`source_${item}`}>
                    {item}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
      {/* <h3>{rssData?.title}</h3> */}
    </div>
  );
}

export default App;
