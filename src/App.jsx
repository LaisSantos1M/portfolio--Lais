import style from "./App.module.css";
import fotoPerfil from "/eu.jpg";
import FacebookIcon from "/face.avif";
import InstagramIcon from "/insta.jpg";
import linkedinIcon from "/like.avif";
import whastsappIcon from "/what.avif";
import htmlImg from "/html.png";
import cssImg from "/css.jpg";
import jsImg from "/js.png";
import viteImg from "/vitee.png";
import reactImg from "/react.png";
import vercelImg from "/vercel.png";






function App() {
  //Javascript

  return (
    <>
      <nav className={style.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={style.s1} id="s1">
          <div className={style.left}>
            <img
              className={style.imgPerfil}
              src={fotoPerfil}
              alt="Foto perfil"
            />
          </div>
          <div className={style.right}>
            <h2>Lais Cristina</h2>
            <p>
              Estudante do 1 ano do ensino medio, faço curso no instituto forja.{" "}
            </p>
          </div>
        </section>

        <section className={style.s2} id="s2">
          <h2 className={style.tecTitle}>Tecnologias</h2>
          <div className={style.wrapCards}>
            <div className={style.card}>
              <img src={htmlImg} width={85} alt="HTML" />
              <h3>HTML</h3>
              <p>
                HTML (Linguagem de Marcação de Hipertexto) é a linguagem padrão
                para criar a estrutura e o conteúdo de páginas da web, definindo
                elementos como títulos, parágrafos, imagens e links.
              </p>
            </div>

            <div className={style.card}>
              <img src={cssImg} width={85} alt="CSS" />
              <h3>CSS</h3>
              <p>
                CSS (Cascading Style Sheets) é uma linguagem de estilo usada
                para definir a aparência de documentos escritos em linguagens de
                marcação como HTML, controlando cores, fontes, layout,
                espaçamentos e outros aspectos visuais.
              </p>
            </div>

            <div className={style.card}>
              <img src={jsImg} width={85} alt="JS" />
              <h3>JS</h3>
              <p>
                JS, ou JavaScript, é uma linguagem de programação usada
                principalmente para tornar páginas web interativas e dinâmicas
                no lado do cliente (navegador) e do servidor (Node.js).
              </p>
            </div>

            <div className={style.card}>
              <img src={viteImg} width={85} alt="VITE" />
              <h3>VITE</h3>
              <p>
                Vite (palavra francesa para "rápido", pronunciada como /vit/,
                como "veet") é uma ferramenta de construção de projetos de
                frontend que se destina a oferecer uma experiência de
                desenvolvimento mais rápida e leve para projetos de web
                modernos.
              </p>
            </div>

            <div className={style.card}>
              <img src={reactImg} width={85} alt="REACT" />
              <h3>REACT</h3>
              <p>
                React é uma biblioteca JavaScript de código aberto criada pelo
                Facebook para construir interfaces de usuário (UIs) interativas,
                especialmente para aplicações web e single-page applications
                (SPAs).
              </p>
            </div>

            <div className={style.card}>
              <img src={vercelImg} width={85} alt="VERCEL" />
              <h3>VERCEL</h3>
              <p>
                Vercel é uma plataforma de nuvem que simplifica a criação,
                implantação e hospedagem de sites e aplicativos web modernos,
                oferecendo um ambiente otimizado para desenvolvedores,
                especialmente para aqueles que utilizam o framework Next.js, que
                foi criado pela própria Vercel.
              </p>
            </div>
          </div>
        </section>

        <section id="s3">
          <h2>sessao 3</h2>
        </section>

        <section id="s4">
          <h2>sessao 4</h2>
        </section>
      </main>
      <footer className={style.rodape}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={FacebookIcon} alt="Facebook" />{" "}
        </a>
        <a
          href="https://www.instagram.com/laiss.secrets/following/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={InstagramIcon} alt="Instagram" />{" "}
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={linkedinIcon} alt="Linkedin" />{" "}
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={whastsappIcon} alt="WhastsApp" />{" "}
        </a>
      </footer>
    </>
  );
}

export default App;
