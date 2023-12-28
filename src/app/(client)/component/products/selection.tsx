import "@/app/css/selection.css";

export default function Selection() {
  return (
    <select>
      <option value="default">Mặc định</option>
      <option value="low2high">Giá - Thấp tới cao</option>
      <option value="high2low">Giá - Cao tới thấp</option>
    </select>
  );
}
