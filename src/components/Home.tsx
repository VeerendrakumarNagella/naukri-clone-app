import naukari from "./images/loginpic.png";

function Home() {
  return (
    <div>
      <div className="homemain-info">
        <section className="homeimage-info">
          <img src={naukari} alt="img" />
        </section>
        <section className="homeh-info">
          <h1>Naukri.com</h1>
        </section>
      </div>
    </div>
  );
}
export default Home;
