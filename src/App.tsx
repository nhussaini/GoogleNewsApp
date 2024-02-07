import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader';
import Header from './components/Header';
import { RssItem, NewsItem } from './models/data.model';
import NewsList from './components/NewsList';
import DateFilter from './components/DateFilter';
import { formatDate } from './utils/helpers';

function App() {
  const [loading, setLoading] = useState(true);
  const [rssInfo, setRssInfo] = useState<RssItem | null>(null);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [sortOptions, setSortOptions] = useState<string>('');

  //handle show favourites
  const handleShowFavouritesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log('check=>', event.target.checked);
  };

  //handle date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

  //filter news for a specific date
  const filterNewsForSpecificDate = (dateString: string): RssItem | null => {
    // Check if rssInfo is null
    if (!rssInfo) {
      return null;
    }
    //call the external date formatter
    const formattedDate = formatDate(dateString);

    //filter newsList
    const filteredNewsList = rssInfo?.newsList.filter(
      (news) => formatDate(news.pubDate) === formattedDate
    );

    //create a new RssItem
    const filteredRssItem: RssItem = {
      title: rssInfo.title,
      lastBuildDate: rssInfo.lastBuildDate,
      link: rssInfo.link,
      newsList: filteredNewsList,
      sources: rssInfo.sources,
    };
    return filteredRssItem;
  };

  const replaceSpaceWithUnderscore = (sources: string[] = []) => {
    const nonDuplicates = Array.from(new Set([...sources]));
    const filteredSources = nonDuplicates.map((item) =>
      item.toLowerCase().replace(/\s+/g, '_')
    );
    return filteredSources;
  };

  //handle sort change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    // Handle the selected sort option here
    console.log('Selected sort option:', selectedOption);
    setSortOptions(selectedOption);
    // handleSortOptions(selectedOption);
  };

  //This function sorts rssInfo based on the options from select dropdown
  const handleSortOptions = (option: string): RssItem | null => {
    console.log('sort option is====>', option);
    if (option === 'newest') {
      const newsList = rssInfo?.newsList.sort(
        (a, b) =>
          Number(moment(b.pubDate).toDate()) -
          Number(moment(a.pubDate).toDate())
      );
      // Check if rssInfo is null
      if (!rssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: rssInfo.title,
        lastBuildDate: rssInfo.lastBuildDate,
        link: rssInfo.link,
        newsList: updatedNewsList,
        sources: rssInfo.sources,
      };
      return sortedNewsLatest;
    }

    // const currentRssInfo = rssInfo;
    // if (currentRssInfo !== null) {
    //
    //   const updatedNewsList: NewsItem[] = newsList || [];
    //   const sortedArticlesNewest = {
    //     ...currentRssInfo,
    //     newsList: updatedNewsList,
    //   };
    //   setRssInfo(sortedArticlesNewest);
    // }

    // // const sortedArticlesNewest:RssItem ={
    // //   ...rssInfo,
    // //   newsList:
    // // }
    // console.log('sorted Artilces=>', rssInfo);
    return null;
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
        //set rssInfo state
        setRssInfo(rssItem);

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
        {selectedDate && (
          <NewsList rssInfo={filterNewsForSpecificDate(selectedDate)} />
        )}
        {sortOptions && <NewsList rssInfo={handleSortOptions(sortOptions)} />}
        {!selectedDate && !sortOptions && <NewsList rssInfo={rssInfo} />}
        {/* {selectedDate ? (
          <div className="test">
            <div>coming soon...</div>
            <NewsList rssInfo={filterNewsForSpecificDate(selectedDate)} />
          </div>
        ) : ({}
          <NewsList rssInfo={rssInfo} />
        )} */}

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
          <DateFilter
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
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
          {/* dropdown select for sorting */}
          <div>
            <label htmlFor="sort_input">Sort By:</label>
            <select id="sort_input" onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="title_asc">title_asc</option>
              <option value="title_desc">title_desc</option>
              <option value="source_asc">source_asc</option>
              <option value="source_desc">source_desc</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
