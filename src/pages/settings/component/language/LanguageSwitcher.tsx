import React from 'react';
import { useLanguage } from './LanguageProvider';
// import { useLanguage } from './LanguageProvider';
// import { useLanguage } from ;

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <select style={{padding:"5px 5px 5px 10px" , outline:"none" , borderRadius:"6px"}} value={language} onChange={handleChange}>
      <option value="العربية">العربية</option>
      <option value="English">English</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageSwitcher;
