import '../assets/css/footer.css'

export default function Footer() {

  return (
    <footer>
      <div className="footer-content">
      <a href='https://www.linkedin.com/in/tucker-killian-a1b651217/'><img src={link} width='150' height='150' align='middle' alt='link'></img></a>
        <a href="https://github.com/Tkilla14/" target="_blank">
          <img className="footer-icon" src="/assets/img/T.png" />
        </a>
        <p>
          copyright &copy; 2023 Tucker Killian
        </p>
      </div>
    </footer>
  );
};