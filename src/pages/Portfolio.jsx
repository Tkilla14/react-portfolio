import Project from '../components/Projects.jsx'

export default function Portfolio() {
  return (
    <div className="portfolioCard">
      <h2 className="portfolioTitle">Portfolio</h2>
      <p className="portfolioDiscription">
        <Project />
      </p>
    </div>
  );
}
