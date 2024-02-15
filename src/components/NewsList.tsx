import { RssItem } from '../models/data.model';
import { formatDate } from '../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart as solidHeart,
  faHeart as outlineHeart,
} from '@fortawesome/free-solid-svg-icons';

type NewsListProps = {
  rssInfo: RssItem | null;
  onToggleFavorite: (articleId: string) => void;
  isArticleFavorite: (articleId: string) => boolean;
};

const NewsList = ({
  rssInfo,
  onToggleFavorite,
  isArticleFavorite,
}: NewsListProps) => {
  console.log('rssInfo==>', rssInfo);
  {
    return (
      <div className="newsList">
        {!rssInfo || rssInfo.newsList.length === 0 ? (
          <p>No Favorite Articles Yet!</p>
        ) : (
          <div id="content">
            {rssInfo?.newsList.map((item) => {
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
                    {isArticleFavorite(item.guid) ? (
                      <FontAwesomeIcon
                        icon={solidHeart}
                        style={{ color: 'red' }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={outlineHeart} />
                    )}
                  </button>
                  <h5 id={`article_${item.guid}_pub_date`}>
                    {formatDate(item.pubDate)}
                  </h5>
                  <h5 id={`article_${item.guid}_source`}>{item.source}</h5>
                  {/* <div id={`article_${item.guid}_desc`}>{item.description}</div> */}
                  <div
                    className="description"
                    id={`article_${item.guid}_desc`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
};
export default NewsList;
