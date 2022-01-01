export interface MultiLanguageLabel {
  en: string;
  ca: string;
  es: string;
}

export type ActionType = 'redirect' | 'other';

export interface HeaderAction {
  title: MultiLanguageLabel;
  type: string;
  path: string;
}

export interface PageHeaderConfigs {
  title: MultiLanguageLabel;
  actions?: HeaderAction[];
}

export interface PageConfigs {
  header: PageHeaderConfigs;
}
