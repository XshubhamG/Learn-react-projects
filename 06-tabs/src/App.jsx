import { useEffect, useState } from "react";
import Loading from "./Loading";
const url = `http://localhost:8000/data`;

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  //! Loading
  if (loading) {
    return <Loading />;
  }

  //! Destructuring
  const { company, dates, title, duties } = jobs[value];

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          {/* btn-container */}
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  className={`job-btn ${index === value && "active-btn"}`}
                  key={item.id}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* job-info */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => (
              <div key={index} className="job-desc">
                <span className="job-icon">{">>"}</span>
                <p>{duty}</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
