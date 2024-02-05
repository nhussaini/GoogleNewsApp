export interface NewsItem {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
  source: string;
}

export interface RssItem {
  title: string;
  lastBuildDate: string;
  link: string;
  newsList: NewsItem[];
  sources: string[];
}
