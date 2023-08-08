import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageDropdown from "./languageDropdown";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="language">
        <LanguageDropdown />
        <h3>{t('main.header')}</h3>
      </div>
    </div>
  );
}

export default Header;
