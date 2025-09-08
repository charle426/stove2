export default function formatBlogDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((now - date) / oneDay);

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  if (diffDays < 21) return "2 weeks ago";
  if (diffDays < 28) return "3 weeks ago";
  if (diffDays < 35) return "4 weeks ago";
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}