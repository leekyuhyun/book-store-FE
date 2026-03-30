import { formatNumber } from '../utils/format';

const COUNT = 1000;

export default function Home() {
  return (
    <div>
      <div>Book Store</div>
      <div>dount: {formatNumber(COUNT)}</div>
    </div>
  );
}
