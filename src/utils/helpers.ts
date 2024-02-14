import moment from 'moment';
import { NewsItem, RssItem } from '../models/data.model';

export const formatDate = (dateString: string): string => {
  const date = moment(dateString).toDate();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // Extract date components
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Construct formatted date string
  const formattedDate = `${date
    .toDateString()
    .substring(0, 3)} ${month} ${day} ${year}`;
  return formattedDate;
};

//create a new RssItem for the sort options
export const createNewRssItem = (
  updatedNewsList: NewsItem[],
  newRssInfo: RssItem
): RssItem => {
  const newRssItem: RssItem = {
    title: newRssInfo.title,
    lastBuildDate: newRssInfo.lastBuildDate,
    link: newRssInfo.link,
    newsList: updatedNewsList,
    sources: newRssInfo.sources,
  };
  return newRssItem;
};

export const replaceSpaceWithUnderscore = (sources: string[] = []) => {
  const nonDuplicates = Array.from(new Set([...sources]));
  const filteredSources = nonDuplicates.map((item) =>
    item.toLowerCase().replace(/\s+/g, '_')
  );
  return filteredSources;
};
