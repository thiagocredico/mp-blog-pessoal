type Post = {
  meta: {
    createdAt: string;
    title: string;
    description: string;
  },
  folder: string;
}

function parseDate(dateString: string): Date {
  const [day, month, year] = dateString.split('/');
  const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  return new Date(formattedDate);
}

function comparePostDates(a: Post, b: Post): number {
  const dateA = parseDate(a.meta.createdAt);
  const dateB = parseDate(b.meta.createdAt);
  return Math.sign(dateB.getTime() - dateA.getTime());
}

function orderPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort(comparePostDates);
}

export default orderPostsByDate;