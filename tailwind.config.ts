import type { Config } from 'tailwindcss'
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{brand:'#0877F9',ink:'#101828',body:'#475467',soft:'#F7F9FC',line:'#E4E7EC'},maxWidth:{content:'1200px'},fontFamily:{sans:['Inter','Arial','sans-serif']},boxShadow:{soft:'0 8px 30px rgba(16,24,40,.08)'}}},plugins:[]} satisfies Config
