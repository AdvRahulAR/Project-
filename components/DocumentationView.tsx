import React from 'react';
import { marked } from 'marked';
import { Header } from './Header';
import { Footer } from './Footer';

interface DocumentationViewProps {
  onBackToChat: () => void;
}

const documentationContent = `
# Welcome to Dharmabot

Dharmabot is a comprehensive AI-powered legal assistant designed specifically for the Indian legal community. Our platform serves legal professionals, law students, judges, and citizens with intelligent tools for legal research, document drafting, case analysis, and professional networking.

## 🤖 Powered by Google Gemini AI

Dharmabot leverages Google's advanced Gemini AI technology to provide accurate, contextual legal assistance specifically trained on Indian laws and legal procedures.

## 🌐 Multilingual Support

**All features of Dharmabot are available in multiple languages**, making legal assistance accessible to users across different linguistic backgrounds in India and beyond.

## 🚀 Core Features

### 💬 AI Chat Interface
• **Multilingual conversations** with specialized legal AI  
• Contextual understanding of Indian law  
• Multi-turn conversations with memory  
• 300+ curated legal prompts  
• Smart auto-complete suggestions  
• **Available in multiple Indian languages**

### 📄 Document Analysis
• Multi-format support (PDF, DOCX, TXT, Images)  
• Advanced PDF processing with OCR  
• Intelligent legal document analysis  
• Batch processing up to 5 documents  
• Real-time processing status  
• **Multilingual document processing**

### 🔍 Deep Research Portal
• Comprehensive legal research with web integration  
• Voice query input for hands-free operation  
• Query optimization for enhanced AI understanding  
• Research session management  
• Professional DOCX export with citations  
• Source verification and links  
• **Research in multiple languages**

### ⚖️ Document Drafting
• AI-powered legal document generation  
• 300+ Indian legal document templates  
• Voice dictation support  
• Rich text editor with legal formatting  
• Professional DOCX and TXT export  
• **Multilingual document generation**

### 🎤 Voicenotes - Audio Legal Assistant

#### 🎙️ Voice Capabilities
• AI-powered transcript polishing and formatting  
• Hands-free legal consultation  
• Audio playback with synchronized transcripts  
• **Multilingual voice recognition and transcription**

#### Neeti Voice Assistant
• Beautiful 3D visualization of voice interactions  
• Voice-based interaction with natural language processing  
• Real-time voice recognition and transcription  
• **Now available in India, UAE, and UK**  
• **Multilingual voice support across all regions**

### 📚 Legal Analysis
• Structured legal consultation analysis  
• Key legal issues identification  
• Possible remedies and follow-up actions  
• Referenced legal sources and citations  
• Professional note organization  
• Smart title generation based on content  
• **Analysis available in multiple languages**

### 👨‍⚖️ Find a Lawyer Directory
• Comprehensive database of verified legal professionals  
• Smart search with practice area matching  
• Location-based filtering  
• Direct contact options (email & phone)  
• Experience-based sorting  
• **Multilingual lawyer profiles and search**

## 👥 User Roles & Access Levels

| Feature | Citizen | Law Student | Judge | Lawyer |
|---------|---------|-------------|-------|--------|
| AI Chat | ✅ | ✅ | ✅ | ✅ |
| Document Upload | ✅ | ✅ | ✅ | ✅ |
| Find a Lawyer | ✅ | ✅ | ❌ | ✅ |
| Document Drafting | ❌ | ✅ | ✅ | ✅ |
| Deep Research | ❌ | ✅ | ✅ | ✅ |
| Voicenotes | ❌ | ❌ | ✅ | ✅ |

## 📖 How to Use Features Effectively

### 💬 AI Chat Interface
• Start with specific legal questions for better responses  
• Use the suggested prompts for common legal scenarios  
• Upload relevant documents to get contextual analysis  
• Enable web search for current legal updates  
• Save important conversations for future reference  
• **Switch between languages as needed for better understanding**

### ⚖️ Document Drafting
• Provide detailed instructions including parties, terms, and jurisdiction  
• Use voice dictation for hands-free document creation  
• Save drafts regularly to prevent data loss  
• Export to DOCX for professional formatting  
• Review and edit generated content before finalizing  
• **Generate documents in your preferred language**

### 🔍 Deep Research
• Frame research queries with specific legal issues and jurisdictions  
• Use voice input for complex research questions  
• AI query optimization for better results  
• Save research sessions for ongoing cases  
• Export research with citations for court submissions  
• Verify sources and cross-reference findings  
• **Conduct research in multiple languages for comprehensive coverage**

### 🎤 Voicenotes
• Record clear audio in quiet environments for better transcription  
• Speak slowly and clearly for accurate voice recognition  
• Review and edit AI-polished notes before saving  
• Get structured legal analysis of consultation transcripts  
• Use descriptive titles for easy organization  
• Keep recordings focused on specific legal topics  
• **Record in your preferred language with automatic transcription**

### 👨‍⚖️ Find a Lawyer
• Use specific keywords like "accident", "divorce", "criminal" for better matches  
• Filter by location to find lawyers in your area  
• Review practice areas and experience before contacting  
• Use both email and phone contact options  
• Prepare your case details before initial consultation  
• **Search in multiple languages for better accessibility**

## 🌍 Global Availability

### Neeti Voice Assistant Regions
• **India** - Full multilingual support with regional language recognition  
• **UAE** - Arabic and English voice support with legal context  
• **UK** - English voice support with UK legal framework understanding  

*More regions coming soon with localized legal knowledge and language support.*

## 💡 Best Practices & Tips

### ✅ Do's
• Be specific and detailed in your queries  
• Provide context and relevant case details  
• Use proper legal terminology when known  
• Save important conversations and drafts  
• Verify AI responses with legal professionals  
• Keep sensitive information confidential  
• **Utilize multilingual features for better comprehension**

### ❌ Don'ts
• Don't rely solely on AI for legal advice  
• Don't share confidential client information  
• Don't use generated documents without review  
• Don't ignore jurisdiction-specific requirements  
• Don't skip professional legal consultation  
• Don't assume AI responses are legally binding  

## 🔧 Technical Requirements

### Browser Support
• **Chrome/Chromium 90+** (Recommended for best multilingual support)  
• Firefox 88+  
• Safari 14+  
• Edge 90+  

### Required Features
• JavaScript enabled  
• Local storage support  
• Microphone access (for voice features)  
• File upload support  
• **Unicode support for multilingual text rendering**

### Performance Optimization
• **Dark mode interface** for reduced eye strain during long sessions  
• Responsive design optimized for all device sizes  
• Fast loading with efficient caching  
• Real-time processing with visual feedback  

## 🔒 Privacy & Security

• **Local data storage** - All conversations and documents stored locally  
• **No server-side data retention** - Your information stays on your device  
• **Secure API communications** - Encrypted connections to AI services  
• **Privacy-first design** - Minimal data collection and processing  

## 📱 Progressive Web App (PWA)

• **Install as native app** on mobile and desktop  
• **Offline capabilities** for basic features  
• **Push notifications** for important updates  
• **Cross-platform compatibility** with consistent experience  

## 📞 Support & Contact

### Getting Help
• **In-app documentation** - Comprehensive guides and tutorials  
• **Community support** - User forums and discussions  
• **Professional support** - Contact UB Intelligence for enterprise needs  

### Feedback & Improvements
• **Feature requests** - Submit suggestions for new capabilities  
• **Bug reports** - Help us improve the platform  
• **User experience feedback** - Share your thoughts on usability  

---

## ⚖️ Legal Disclaimer

**Dharmabot is an AI-powered legal assistant designed to provide general legal information and assistance. It is not a substitute for professional legal advice. Users should consult with qualified legal professionals for specific legal matters and important decisions.**

**The multilingual capabilities are designed to assist with understanding and communication but do not replace the need for professional legal translation services in formal legal proceedings.**

---

## 🏢 About UB Intelligence

**UB Intelligence** is committed to democratizing legal access through innovative AI technology. Our mission is to empower the legal community with intelligent tools that enhance efficiency, accuracy, and accessibility in legal practice.

### Our Vision
*To make quality legal assistance accessible to everyone, regardless of language, location, or economic background.*

---

© 2024 UB Intelligence. All rights reserved.  
**Dharmabot** - Empowering the Indian Legal Community with AI Technology.

*Available in multiple languages • Powered by Google Gemini AI • Trusted by legal professionals worldwide*
`;

export const DocumentationView: React.FC<DocumentationViewProps> = ({ onBackToChat }) => {
  const htmlContent = marked.parse(documentationContent) as string;

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="flex-grow p-3 sm:p-4 md:p-6 overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">
                  Documentation
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Complete guide to Dharmabot features and capabilities
                </p>
              </div>
            </div>
            <button
              onClick={onBackToChat}
              className="px-4 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-150 hover:scale-105 active:scale-95 flex items-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Back to Chat</span>
            </button>
          </div>
          
          <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-fade-in-slide-up">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">AI-Powered Legal Assistant</h2>
                  <p className="text-red-100 text-sm">Multilingual • Intelligent • Comprehensive</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 md:p-10">
              <div 
                className="prose prose-sm md:prose-base lg:prose-lg prose-invert max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-code:text-red-300 prose-code:bg-slate-700 prose-pre:bg-slate-800 prose-blockquote:border-red-500 prose-blockquote:text-slate-300 prose-th:text-slate-200 prose-td:text-slate-300"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
            
            <div className="bg-slate-800 dark:bg-slate-900 p-6 border-t border-slate-700">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/Logos.png" 
                    alt="Dharmabot Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Dharmabot by UB Intelligence</p>
                    <p className="text-xs text-slate-400">Empowering legal professionals with AI</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <span>🌐 Multilingual</span>
                  <span>🤖 AI-Powered</span>
                  <span>⚖️ Legal-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};