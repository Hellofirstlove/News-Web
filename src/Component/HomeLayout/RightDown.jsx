const newsItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    title: "Bangladesh Cricket Team Reaches Asia Cup Final for First Time",
    category: "Sports",
    date: "Aug 18, 2025",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    title: "Meta Unveils Its Most Powerful AI Model to Date, Rivals GPT-4",
    category: "Technology",
    date: "Aug 15, 2025",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600775508114-5c30cf911a40?auto=format&fit=crop&w=800&q=80",
    title: "Dhaka City Corporation Launches Smart Traffic Management System",
    category: "National",
    date: "Aug 12, 2025",
  },
];

function RinghtDown() {
  return (
    <div className="w-full max-w-sm p-4">
      <div className="flex flex-col gap-7">
        {newsItems.map((newsItem) => (
          <article key={newsItem.id} className="w-full">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="h-36 w-full rounded-md object-cover"
            />
            {/* Title */}
            <h2 className="mt-4 text-[16px] font-bold leading-6 text-base-content">
              {newsItem.title}
            </h2>
            {/* Meta */}
            <div className="mt-4 flex items-center gap-4 text-sm text-base-content/50">
              <span className="text-base-content/70">{newsItem.category}</span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {newsItem.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default RinghtDown;