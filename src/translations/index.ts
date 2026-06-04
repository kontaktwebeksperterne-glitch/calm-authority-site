import { da } from './da';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { it } from './it';

export type Language = 'da' | 'en' | 'de' | 'fr' | 'it';

export type Translations = typeof en;

export const translations: Record<Language, Translations> = {
  da,
  en,
  de,
  fr,
  it,
};

export const languageNames: Record<Language, string> = {
  da: 'Dansk',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
};

export const languageCodes: Record<Language, string> = {
  da: 'DA',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
  it: 'IT',
};
