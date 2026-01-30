import { da } from './da';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';

export type Language = 'da' | 'en' | 'de' | 'fr';

export type Translations = typeof da;

export const translations: Record<Language, Translations> = {
  da,
  en,
  de,
  fr,
};

export const languageNames: Record<Language, string> = {
  da: 'Dansk',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

export const languageCodes: Record<Language, string> = {
  da: 'DA',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
};
