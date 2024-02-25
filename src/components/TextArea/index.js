import './index.scss';

export default function TextArea({ value, onChange }) {
  return (
    <textarea className="text-area" placeholder="Paste your text here..." value={value} onChange={onChange}></textarea>
  );
}