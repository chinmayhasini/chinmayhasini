
import Layout from './components/layout';
import './App.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const lang = useSelector((state) => state.language)
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log("Language--", lang)
    i18n.changeLanguage(lang)
  }, [lang])
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
