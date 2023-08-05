import React from "react";
import { useTranslation } from 'react-i18next';
import BarChart from "./BarChart";
import LanguageDropdown from "./languageDropdown";

function Dashboard() {
    const { t } = useTranslation();
    return (
        <div className="dashboard">
            <div>
                <LanguageDropdown />
                <h3>{t('main.header')}</h3>
            </div>
            <div>
                <BarChart />
            </div>
        </div>
    );
}

export default Dashboard;
