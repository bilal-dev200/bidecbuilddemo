import MediaCard from "../Cards/MediaCard";

export default function MediaList({ size = "large" }) {
  const items = [
    {
      id: 1,
      title: "Sample Title 1",
      date: "Aug 15, 2025",
      description:
        "This is a short description for the article. It gives a preview of the content.",
      image: "/property.png",
    },
    {
      id: 2,
      title: "Sample Title 2",
      date: "Aug 12, 2025",
      description:
        "Another sample description to fill space and show card balance.",
      image: "/property.png",
    },
    {
      id: 3,
      title: "Sample Title 3",
      date: "Aug 10, 2025",
      description: "Details about the article can go here. Kept short for preview.",
      image: "/property.png",
    },
    {
      id: 4,
      title: "Sample Title 4",
      date: "Aug 8, 2025",
      description: "Quick preview content so users get the gist.",
      image: "/property.png",
    },
  ];

  return (
    <div
      className={`grid gap-4 sm:gap-6 ${
        size === "small"
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <MediaCard key={item.id} {...item} size={size} />
      ))}
    </div>
  );
}
