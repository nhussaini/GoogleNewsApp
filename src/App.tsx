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
import FavouriteArticlesList from './components/FavouriteArticlesList';

function App() {
  const [loading, setLoading] = useState(true);
  const [rssInfo, setRssInfo] = useState<RssItem | null>(null);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [sortOption, setSortOptions] = useState<string>('');
  const [favoriteArticles, setFavoriteArticles] = useState<Set<string>>(
    new Set()
  );
  const [articleSources, setArticleSources] = useState<Set<string>>(new Set());

  //handle onToggleSource
  const onToggleSource = (source: string) => {
    console.log('article source=>', source);

    setArticleSources((prevArticleSources) => {
      const newArticleSources = new Set(prevArticleSources);
      if (newArticleSources.has(source)) {
        newArticleSources.delete(source);
      } else {
        newArticleSources.add(source);
      }

      return newArticleSources;
    });
  };
  //filter Article sources
  const filterArticleSources = () => {
    console.log('every time a source is clicked/unclicked');
    // const filteredArtilceSources = rssInfo?.newsList.filter((article) =>
    //   articleSources.has(article.source)
    // );
    // console.log('rssinfo====>', rssInfo);

    const filteredArticleSources = rssInfo?.newsList.filter(
      (article) => {
        // console.log('article.source =>', article.source);
        const convertedArticleSource = article.source
          .toLowerCase()
          .replace(/\s+/g, '_');
        // console.log('after conversion=>', convertedArticleSource);

        return articleSources.has(convertedArticleSource);
      }
      // articleSources.has(article.source)
    );
    console.log(
      'filtered sources for specific source=> ',
      filteredArticleSources
    );
  };

  useEffect(() => {
    console.log('Article source=>', articleSources);
    filterArticleSources();
  }, [articleSources]);
  // useEffect(() => {
  //   console.log('Favorite Articles:', favoriteArticles);
  // }, [favoriteArticles]);
  // useEffect(() => {
  //   handleSelectedDateAndSortOption(selectedDate, sortOption);
  // }, [selectedDate, sortOption]);

  //handle show favourites
  const handleShowFavouritesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowFavourites(event.target.checked);
  };

  //filter the favorite articles
  const filterFavoriteArticles = () => {
    //find out favorite articles from rssInfo
    const filteredFavouriteArticles = rssInfo?.newsList.filter((article) =>
      favoriteArticles.has(article.guid)
    );
    console.log('favorite articles==>', filteredFavouriteArticles);

    //store fav articles in local storage
    // const jsonString: string = JSON.stringify(filteredFavouriteArticles);
    // localStorage.setItem('favourites', jsonString);

    return filteredFavouriteArticles;
  };

  //onToggleFavorite for individual article
  const onToggleFavorite = (articleId: string) => {
    setFavoriteArticles((prevFavoriteArticles) => {
      const newFavoriteArticles = new Set(prevFavoriteArticles);
      if (newFavoriteArticles.has(articleId)) {
        newFavoriteArticles.delete(articleId);
      } else {
        newFavoriteArticles.add(articleId);
      }

      //find out favorite articles from rssInfo
      const filteredFavouriteArticles = rssInfo?.newsList.filter((article) =>
        favoriteArticles.has(article.guid)
      );

      //store fav articles in local storage
      const jsonString: string = JSON.stringify(filteredFavouriteArticles);
      localStorage.setItem('favourites', jsonString);
      return newFavoriteArticles;
    });
  };

  //to show that article is favorite or not
  const isArticleFavorite = (articleId: string) => {
    return favoriteArticles.has(articleId);
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
    setSortOptions(selectedOption);
    // handleSortOptions(selectedOption);
  };

  //This function sorts rssInfo based on the options from select dropdown
  const handleSortOptions = (
    option: string,
    rssForADate?: RssItem | null
  ): RssItem | null => {
    let newRssInfo = null;
    rssForADate ? (newRssInfo = rssForADate) : (newRssInfo = rssInfo);
    //default
    // if (option === 'default') {
    //   setSortOptions('');
    //   console.log('sort options state is=>', sortOption);
    //   return null;
    // }

    //newest option
    if (option === 'newest') {
      const newsList = newRssInfo?.newsList.sort(
        (a, b) =>
          Number(moment(b.pubDate).toDate()) -
          Number(moment(a.pubDate).toDate())
      );
      // Check if rssInfo is null
      if (!newRssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: newRssInfo.title,
        lastBuildDate: newRssInfo.lastBuildDate,
        link: newRssInfo.link,
        newsList: updatedNewsList,
        sources: newRssInfo.sources,
      };
      return sortedNewsLatest;
    }
    //oldest option
    if (option === 'oldest') {
      const newsList = newRssInfo?.newsList.sort(
        (a, b) =>
          Number(moment(a.pubDate).toDate()) -
          Number(moment(b.pubDate).toDate())
      );
      // Check if rssInfo is null
      if (!newRssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: newRssInfo.title,
        lastBuildDate: newRssInfo.lastBuildDate,
        link: newRssInfo.link,
        newsList: updatedNewsList,
        sources: newRssInfo.sources,
      };
      return sortedNewsLatest;
    }
    //title_asc
    if (option === 'title_asc') {
      const newsList = newRssInfo?.newsList
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));

      // Check if rssInfo is null
      if (!newRssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: newRssInfo.title,
        lastBuildDate: newRssInfo.lastBuildDate,
        link: newRssInfo.link,
        newsList: updatedNewsList,
        sources: newRssInfo.sources,
      };
      return sortedNewsLatest;
    }

    //title_desc
    if (option === 'title_desc') {
      const newsList = newRssInfo?.newsList
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));

      // Check if rssInfo is null
      if (!newRssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: newRssInfo.title,
        lastBuildDate: newRssInfo.lastBuildDate,
        link: newRssInfo.link,
        newsList: updatedNewsList,
        sources: newRssInfo.sources,
      };
      return sortedNewsLatest;
    }

    //source_asc
    if (option === 'source_asc') {
      const newsList = newRssInfo?.newsList
        .slice()
        .sort((a, b) => a.source.localeCompare(b.source));

      // Check if rssInfo is null
      if (!newRssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: newRssInfo.title,
        lastBuildDate: newRssInfo.lastBuildDate,
        link: newRssInfo.link,
        newsList: updatedNewsList,
        sources: newRssInfo.sources,
      };
      return sortedNewsLatest;
    }

    //source_desc
    if (option === 'source_desc') {
      const newsList = newRssInfo?.newsList
        .slice()
        .sort((a, b) => b.source.localeCompare(a.source));

      // Check if rssInfo is null
      if (!newRssInfo) {
        return null;
      }

      const updatedNewsList: NewsItem[] = newsList || [];

      //create a new RssItem
      const sortedNewsLatest: RssItem = {
        title: newRssInfo.title,
        lastBuildDate: newRssInfo.lastBuildDate,
        link: newRssInfo.link,
        newsList: updatedNewsList,
        sources: newRssInfo.sources,
      };
      return sortedNewsLatest;
    }

    return null;
  };

  //handle selectedDate and sortOption
  const handleSelectedDateAndSortOption = (
    selectedDate: string,
    selectedOption: string
  ): RssItem | null => {
    // Check if rssInfo is null
    if (!rssInfo) {
      return null;
    }

    const rssInfoForSpecDate = filterNewsForSpecificDate(selectedDate);

    const rssInfoforDateAndOption = handleSortOptions(
      selectedOption,
      rssInfoForSpecDate
    );
    return rssInfoForSpecDate;
  };

  useEffect(() => {
    console.log('Favorite Articles:', favoriteArticles);
  }, [favoriteArticles]);
  useEffect(() => {
    handleSelectedDateAndSortOption(selectedDate, sortOption);
  }, [selectedDate, sortOption]);

  //useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.journey.skillreactor.io/r/f/rss.xml'
        );
        setLoading(false);
        const xmlData = response.data;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const title =
          xmlDoc.querySelector('channel > title')?.textContent || '';
        const lastBuildDate =
          xmlDoc.querySelector('channel > lastBuildDate')?.textContent || '';
        const link = xmlDoc.querySelector('channel > link')?.textContent || '';

        const sources = Array.from(
          xmlDoc.querySelectorAll('channel > item >source')
        ).map((source) => source.textContent || '');

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
        {showFavourites ? (
          <FavouriteArticlesList
            favoriteArticles={filterFavoriteArticles()}
            onToggleFavorite={onToggleFavorite}
            isArticleFavorite={isArticleFavorite}
          />
        ) : // <div filterFavoriteArticles={() => filterFavoriteArticles()}> Favorite articles......</div>
        articleSources.size > 0 ? (
          // Render the new component if articleSources is true
          <div>article sources</div>
        ) : selectedDate && !sortOption ? (
          <NewsList
            onToggleFavorite={onToggleFavorite}
            rssInfo={filterNewsForSpecificDate(selectedDate)}
            isArticleFavorite={isArticleFavorite}
          />
        ) : sortOption && !selectedDate ? (
          <NewsList
            onToggleFavorite={onToggleFavorite}
            rssInfo={handleSortOptions(sortOption)}
            isArticleFavorite={isArticleFavorite}
          />
        ) : selectedDate && sortOption ? (
          <NewsList
            onToggleFavorite={onToggleFavorite}
            rssInfo={handleSelectedDateAndSortOption(selectedDate, sortOption)}
            isArticleFavorite={isArticleFavorite}
          />
        ) : (
          <NewsList
            onToggleFavorite={onToggleFavorite}
            rssInfo={rssInfo}
            isArticleFavorite={isArticleFavorite}
          />
        )}

        <div className="features">
          {/* checkbox for favourties */}
          <div>
            <input
              type="checkbox"
              id="show_favourites"
              // checked={showFavourites}
              onChange={handleShowFavouritesChange}
            />
            <label htmlFor="show_favourites">
              {showFavourites ? 'Hide Favourites' : 'Show Favourites'}
            </label>
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
                  <button
                    id={`source_${item}`}
                    key={`source_${item}`}
                    onClick={() => onToggleSource(item)}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          {/* dropdown select for sorting */}
          <div>
            <label htmlFor="sort_input">Sort By:</label>
            <select id="sort_input" onChange={handleSortChange}>
              {/* <option value="default">Default</option> */}
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
