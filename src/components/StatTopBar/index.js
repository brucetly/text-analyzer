import './index.scss';

export default function StatTopBar({ words, characters, sentences, paragraphs, pronouns }) {
  const items = [
    {
      id: 1,
      name: "Words",
      value: words
    },
    {
      id: 2,
      name: "Characters",
      value: characters
    },
    {
      id: 3,
      name: "Sentences",
      value: sentences
    },
    {
      id: 4,
      name: "Paragraphs",
      value: paragraphs
    },
    {
      id: 5,
      name: "Pronouns",
      value: pronouns
    },
  ];

  return (
    <div className="stat-top-bar">
      {items.map((item) => (
        <div key={item.id} className="stat-item">
          <span className="stat-name">{item.name}</span>
          <span className="stat-value">{item.value}</span>
        </div>
      ))}
    </div>
  )
}