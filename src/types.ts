export type SectionId = 'innovations' | 'entertainment' | 'contact';

export interface EntertainmentProject {
  id: string;
  title: string;
  subtitle: string;
  format: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  aspectRatio: string;
  credits?: string;
  highlights?: string[];
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  project: string;
  durationSec: number;
  bpm: number;
  rootHz: number;
  chordHz: number[];
  audioUrl?: string;
}

export interface ContactInquiryPrefill {
  subject: string;
  message: string;
}
