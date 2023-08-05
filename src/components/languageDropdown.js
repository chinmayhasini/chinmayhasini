import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation();
    let [language, setlanguage] = useState("en")
    const handleChange = (event) => {
        setlanguage(event.target.value)
        dispatch({
            type: "CHANGE_LANGUAGE",
            language: event.target.value
        })
        i18n.changeLanguage(event.target.value)
}
const languages = [
    { key: "en", value: 'en', title: "English" },
    { key: "lv",  value: 'lv', title: "Latviski" },
    { key: "ev,",  value: 'ev', title: "Español," }
]
return (
    <div>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChange}
            >
                {languages.map(item => <MenuItem name={item.key} key={item.key} value={item.value}>{item.title}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
)
}

export default LanguageDropdown;