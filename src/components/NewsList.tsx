import { RssItem, NewsItem } from '../models/data.model';

type NewsListProps = {
  rssInfo: RssItem | null;
};

const NewsList = ({ rssInfo }: NewsListProps) => {
  //format the date
  const formatDate = (dateString: string): string => {
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
    const date = new Date(dateString);

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

  {
    return (
      <div>
        {' '}
        rssInfo?.title && (
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
                <button id={`article_${item.guid}_fav_btn`}>Favorite</button>
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
      </div>
    );
  }
};
export default NewsList;

// {rssInfo?.title ? (
//     <div id="content">
//       {rssInfo.newsList.map((item) => {
//         return (
//           <div
//             className="article"
//             id={`article_${item.guid}`}
//             key={`article_${item.guid}`}
//           >
//             <h4 id={`article_${item.guid}_title`}>
//               <a href={item.link}>{item.title}</a>
//             </h4>
//             <button id={`article_${item.guid}_fav_btn`}>Favorite</button>
//             <h5 id={`article_${item.guid}_pub_date`}>
//               {formatDate(item.pubDate)}
//             </h5>
//             <h5 id={`article_${item.guid}_source`}>{item.source}</h5>
//             {/* <div id={`article_${item.guid}_desc`}>{item.description}</div> */}
//             <div
//               id={`article_${item.guid}_desc`}
//               dangerouslySetInnerHTML={{ __html: item.description }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   ) : (
//     <Loader></Loader>
//   )}
