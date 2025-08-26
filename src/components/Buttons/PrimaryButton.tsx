function PrimaryButton(props: {text: string}) {
  return (
    <div className="mt-4">
      <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded mt-8">
        {props.text}
      </button>
    </div>
  );
}

export default PrimaryButton;
