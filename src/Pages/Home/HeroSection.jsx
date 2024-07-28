import heroImg from "../../img/22.png";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            初めまして、モンダル チャンドンです。
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">フロントエンド</span>
            <br />
            エンジニア
          </h1>
          <p className="hero--section-description">
            5年以上ウェブアプリで仕事をやっております。
            <br /> 今
            <a href="https://enjoyworks.co.jp/" target="_blank">
              株式会社エンジョイワークス
            </a>
            でフロントエンドエンジニアとして務めております。
          </p>
          <br />
        </div>
        <a
          className="btn btn-primary"
          href="https://chandan-mondal.com/img/2024-7-20.pdf"
          target="_blank"
        >
          履歴書
        </a>
      </div>
      <div className="hero--section--img">
        <img src={heroImg} alt="Hero Section" />
      </div>
    </section>
  );
}
