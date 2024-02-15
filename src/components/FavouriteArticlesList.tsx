//Just keeping this component here,
//but it has not been used in the parent component

import { NewsItem } from '../models/data.model';
import { formatDate } from '../utils/helpers';

type FavouriteArticlesListProps = {
  favoriteArticles: NewsItem[] | undefined;
  onToggleFavorite: (articleId: string) => void;
  isArticleFavorite: (articleId: string) => boolean;
};

const FavouriteArticlesList = ({
  favoriteArticles,
  onToggleFavorite,
  isArticleFavorite,
}: FavouriteArticlesListProps) => {
  {
    return (
      <div id="content">
        {/* {favoriteArticles &&
          favoriteArticles.map((item) => { */}
        {favoriteArticles?.map((item) => {
          return (
            <div
              className="article"
              id={`article_${item.guid}`}
              key={`article_${item.guid}`}
            >
              <h4 id={`article_${item.guid}_title`}>
                <a href={item.link}>{item.title}</a>
              </h4>
              <button
                id={`article_${item.guid}_fav_btn`}
                onClick={() => onToggleFavorite(item.guid)}
              >
                {isArticleFavorite(item.guid)
                  ? 'Remove as Favorite'
                  : 'Favorite'}
              </button>
              <h5 id={`article_${item.guid}_pub_date`}>
                {formatDate(item.pubDate)}
              </h5>
              <h5 id={`article_${item.guid}_source`}>{item.source}</h5>
              {/* <div id={`article_${item.guid}_desc`}>{item.description}</div> */}
              <div
                id={`article_${item.guid}_desc`}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          );
        })}
      </div>
    );
  }
};
export default FavouriteArticlesList;
