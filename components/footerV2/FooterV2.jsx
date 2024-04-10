export default function FooterV2() {
  return (
    <footer className="footer full-bleed">
      {/* <div className="letsmeet">Let's meet</div> */}

      <div className="footer-main">
        <a target="_blank" href="mailto:kazekaito.contact@gmail.com?subject=Hi Osman! I'm contacting because..." className="mail">
          kazekaito.contact@gmail.com
        </a>
        <hr />
        <div className="social">
          <a target="_blank" href="https://www.instagram.com/kazekaito/">
            <img src="../../icons/social/instagram.svg" alt="Instagram" />
          </a>
          <a target="_blank" href="https://www.behance.net/riovaldorahman">
            <img src="../../icons/social/behance.svg" alt="Behance" />
          </a>
          <a target="_blank" href="https://linkedin.com/in/riovaldorahman">
            <img src="../../icons/social/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>

        {/*
					<div className="copyright">
						© 2021 · OsmanThewho — Code by Yunus Emre.
					</div>
				*/}
      </div>
    </footer>
  );
}
