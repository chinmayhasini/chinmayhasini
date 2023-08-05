import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  let footerText = t('main.footer')
  return (
    <div className="footer">
      <h5>{footerText}</h5>
    </div>
  );
}

export default Footer;
