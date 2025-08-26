export default function Card({ text }: { text: string }) {
  return (
    <>
      <div className="p-4 shadow rounded-lg bg-white ">
        <p className="font-semibold">{text}</p>
      </div>
    </>
  );
}
