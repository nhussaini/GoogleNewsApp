import React, { useEffect, useState } from 'react';
import moment from 'moment';
// import './App.css';
import './App.scss';
import axios from 'axios';
import Loader from './components/Loader';
import Header from './components/Header';
import { RssItem, NewsItem } from './models/data.model';
import NewsList from './components/NewsList';
import DateFilter from './components/DateFilter';
import { createNewRssItem, formatDate } from './utils/helpers';
import FavouriteArticlesList from './components/FavouriteArticlesList';
import SourcesButton from './components/SourcesButton';

function App() {
  const [loading, setLoading] = useState(true);
  const [rssInfo, setRssInfo] = useState<RssItem | null>(null);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');
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
  const filterArticleSources = (): RssItem | null => {
    const filteredArticleSources = rssInfo?.newsList.filter((article) => {
      const convertedArticleSource = article.source
        .toLowerCase()
        .replace(/\s+/g, '_');
      return articleSources.has(convertedArticleSource);
    });
    if (!rssInfo) {
      return null;
    }

    // create a new RssItem
    const updatedNewsList: NewsItem[] = filteredArticleSources || [];

    const filteredRssItem: RssItem = {
      title: rssInfo.title,
      lastBuildDate: rssInfo.lastBuildDate,
      link: rssInfo.link,
      newsList: updatedNewsList,
      sources: rssInfo.sources,
    };
    return filteredRssItem;
  };
  //to show that a source is selected or not
  const isSourceSelected = (source: string) => {
    return articleSources.has(source);
  };

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

  // const replaceSpaceWithUnderscore = (sources: string[] = []) => {
  //   const nonDuplicates = Array.from(new Set([...sources]));
  //   const filteredSources = nonDuplicates.map((item) =>
  //     item.toLowerCase().replace(/\s+/g, '_')
  //   );
  //   return filteredSources;
  // };

  //handle sort change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    // Handle the selected sort option here
    setSortOption(selectedOption);
  };

  //This function sorts rssInfo based on the options from select dropdown
  const handleSortOptions = (
    option: string,
    rssForADate?: RssItem | null
  ): RssItem | null => {
    const newRssInfo = rssForADate ?? rssInfo;

    if (!newRssInfo) {
      return null;
    }

    let sortedNewsList: NewsItem[] | undefined;
    switch (option) {
      case 'newest':
        sortedNewsList = newRssInfo.newsList
          .slice()
          .sort(
            (a, b) =>
              Number(moment(b.pubDate).toDate()) -
              Number(moment(a.pubDate).toDate())
          );
        break;
      case 'oldest':
        sortedNewsList = newRssInfo.newsList
          .slice()
          .sort(
            (a, b) =>
              Number(moment(a.pubDate).toDate()) -
              Number(moment(b.pubDate).toDate())
          );
        break;
      case 'title_asc':
        sortedNewsList = newRssInfo.newsList
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title_desc':
        sortedNewsList = newRssInfo.newsList
          .slice()
          .sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'source_asc':
        sortedNewsList = newRssInfo.newsList
          .slice()
          .sort((a, b) => a.source.localeCompare(b.source));
        break;
      case 'source_desc':
        sortedNewsList = newRssInfo.newsList
          .slice()
          .sort((a, b) => b.source.localeCompare(a.source));
        break;
      default:
        return null;
    }

    return createNewRssItem(sortedNewsList, newRssInfo);
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

    return rssInfoForSpecDate;
  };

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
          xmlDoc.querySelector('channel > title')?.textContent ?? '';
        const lastBuildDate =
          xmlDoc.querySelector('channel > lastBuildDate')?.textContent ?? '';
        const link = xmlDoc.querySelector('channel > link')?.textContent ?? '';

        const sources = Array.from(
          xmlDoc.querySelectorAll('channel > item >source')
        ).map((source) => source.textContent ?? '');

        const newsList: NewsItem[] = Array.from(
          xmlDoc.querySelectorAll('item')
        ).map((item) => {
          const title = item.querySelector('title')?.textContent ?? '';
          const link = item.querySelector('link')?.textContent ?? '';
          const guid = item.querySelector('guid')?.textContent ?? '';
          const pubDate = item.querySelector('pubDate')?.textContent ?? '';
          const description =
            item.querySelector('description')?.textContent ?? '';
          const source = item.querySelector('source')?.textContent ?? '';

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
          // <div>article sources</div>
          <NewsList
            onToggleFavorite={onToggleFavorite}
            rssInfo={filterArticleSources()}
            isArticleFavorite={isArticleFavorite}
          />
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

          {
            rssInfo && (
              <SourcesButton
                sources={rssInfo.sources}
                isSourceSelected={isSourceSelected}
                onToggleSource={onToggleSource}
              />
            )
            // replaceSpaceWithUnderscore(rssInfo.sources).map((item) => {
            //   return (
            //     <button
            //       id={`source_${item}`}
            //       key={`source_${item}`}
            //       onClick={() => onToggleSource(item)}
            //       className={
            //         isSourceSelected(item) ? 'selected' : 'unselected'
            //       }
            //     >
            //       {item}
            //     </button>
            //   );
            // })
          }

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
