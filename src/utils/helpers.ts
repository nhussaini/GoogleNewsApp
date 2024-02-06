//format the date
export const formatDate = (dateString: string): string => {
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
  //   console.log('date is:', date);

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
