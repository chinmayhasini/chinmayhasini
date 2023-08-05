import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer">
      <h5>{t('main.footer')}</h5>
    </div>
  );
}

export default Footer;
