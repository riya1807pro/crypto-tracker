
export default function FilterSortBar({ onSort, onFilter }: { onSort: (key: string) => void; onFilter: (term: string) => void }) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Filter by name/symbol"
        className="px-2 py-1 border rounded"
        onChange={e => onFilter(e.target.value)}
      />
      <select className="px-2 py-1 border rounded" onChange={e => onSort(e.target.value)}>
        <option value="price">Sort by Price</option>
        <option value="marketCap">Sort by Market Cap</option>
        <option value="change24h">Sort by 24h Change</option>
      </select>
    </div>
  );
}