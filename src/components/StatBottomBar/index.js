import './index.scss';

export default function StatBottomBar({ averageTime, longWord }) {
  const items = [
    {
      id: 1,
      name: "Average Reading Time:",
      value: averageTime
    },
    {
      id: 2,
      name: "Longest Word:",
      value: longWord
    },
  ];

  return (
    <div className="stat-bottom-bar">
      {items.map((item) => (
        <div key={item.id} className="stat-item">
          <span className="stat-name">{item.name}</span>
          <span className="stat-value">{item.value}</span>
        </div>
      ))}
    </div>
  )
}