'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languages = [
  {
    code: 'id',
    name: 'Bahasa Indonesia',
    flag: 'https://flagcdn.com/w40/id.png',
  },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
];

export default function SelectLanguage() {
  const [language, setLanguage] = useState('id');

  const selectedLang = languages.find((lang) => lang.code === language);

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-40 border-0 flex items-center gap-2 px-3 py-2">
        <img
          src={selectedLang?.flag}
          alt={selectedLang?.name}
          className="w-5 h-5"
        />
        <SelectValue>{selectedLang?.name}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="flex items-center gap-2"
          >
            <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
