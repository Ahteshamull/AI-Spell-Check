export interface SpellCheckResult {
  original: string;
  corrected: string;
  suggestions?: string[];
}

export interface AIResponse {
  text: string;
  confidence?: number;
}

export interface ChatMessage {
  type: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export interface ExtensionConfig {
  apiKey: string;
  tone: 'professional' | 'casual' | 'friendly';
  ignoreWords: string[];
  autoFixOnSave: boolean;
}
