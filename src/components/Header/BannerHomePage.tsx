
function BannerHompage(props: { text: string }) {
  return (
    <div className="bg-violet-200 h-40 rounded-2xl">
      <h1 className="text-black font-mono text-center text-3xl font-bold mt-6 pt-12 p-4 ">
        {props.text}
      </h1>
    </div>
  );
}
export default BannerHompage;
