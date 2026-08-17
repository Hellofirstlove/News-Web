const newsItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    date: "Jan 4, 2022",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    date: "Jan 4, 2022",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80",
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    date: "Jan 4, 2022",
  },
];

function RinghtDown() {
  return (
    <div className="w-full max-w-sm p-4">
      <div className="flex flex-col gap-7">
        {newsItems.map((newsItem) => (
          <article key={newsItem.id} className="w-full">
            {/* Image */}
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="h-36 w-full rounded-md object-cover"
            />

            {/* Title */}
            <h2 className="mt-4 text-[16px] font-bold leading-6 text-gray-700">
              {newsItem.title}
            </h2>

            {/* Meta information */}
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="text-gray-600">
                {newsItem.category}
              </span>

              <span className="flex items-center gap-2">
                {/* Calendar icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="17"
                    rx="2"
                  />
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