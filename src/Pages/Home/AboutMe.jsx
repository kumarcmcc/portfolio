import aboutImg from "../../img/11.png";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutImg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            モンダルチャンドンクマルと申します。インド人です。2015年から日本で住んでいます。今奥さん一緒に埼玉県の所沢市で住んでいます。
          </p>
          <p className="hero--section-description">
            日本来る前インドで大学を卒業しました。日本に来て最初の2年間
            <a href="https://shinjuku-heiwa.com/" target="_blank">
              新宿平和日本語
            </a>
            で日本語を勉強しました。外時日本語能力試験Ｎ2合格しました。。その後
            <a href="https://www.cadseizu.ac.jp/" target="_blank">
              CAD製図専門学校
            </a>
            でITとCADを学びました。ITとCADの中ITが好きになってそれからフロントエンドエンジニアになりました。これからバックエンドも学びたいと思っています。バックエンド上手く出来ればフルスタックで働くことできるかと思います。
          </p>
          <p className="hero--section-description">
            旅行とパソコンとコードで話すは大好きです。
          </p>
        </div>
      </div>
    </section>
  );
}
