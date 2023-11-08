import { Audio } from "react-loader-spinner";
const Loading = () => {
  return (
    <section className="section loading">
      <h1>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#2caeba"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </h1>
    </section>
  );
};

export default Loading;
