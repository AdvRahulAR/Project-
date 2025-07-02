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

## 🚀 Core Features

### 💬 AI Chat Interface
• Natural language conversations with specialized legal AI  
• Contextual understanding of Indian law  
• Multi-turn conversations with memory  
• 300+ curated legal prompts  
• Smart auto-complete suggestions  

### 📄 Document Analysis
• Multi-format support (PDF, DOCX, TXT, Images)  
• Advanced PDF processing with OCR  
• Intelligent legal document analysis  
• Batch processing up to 5 documents  
• Real-time processing status  

### 🔍 Deep Research Portal
• Comprehensive legal research with web integration  
• Voice query input for hands-free operation  
• Query optimization for enhanced AI understanding  
• Research session management  
• Professional DOCX export with citations  
• Source verification and links  

### ⚖️ Document Drafting
• AI-powered legal document generation  
• 300+ Indian legal document templates  
• Voice dictation support  
• Rich text editor with legal formatting  
• Professional DOCX and TXT export  

### 🎤 Voicenotes - Audio Legal Assistant

#### 🎙️ Voice Capabilities
• AI-powered transcript polishing and formatting  
• Hands-free legal consultation  
• Audio playback with synchronized transcripts  

#### Neeti Voice Assistant
• Beautiful 3D visualization of voice interactions  
• Voice-based interaction with natural language processing  
• Real-time voice recognition and transcription  

### 📚 Legal Analysis
• Structured legal consultation analysis  
• Key legal issues identification  
• Possible remedies and follow-up actions  
• Referenced legal sources and citations  
• Professional note organization  
• Smart title generation based on content  

## 👥 User Roles & Access Levels

| Feature | Citizen | Law Student | Judge | Lawyer |
|---------|---------|-------------|-------|--------|
| AI Chat | ✅ | ✅ | ✅ | ✅ |
| Document Upload | ✅ | ✅ | ✅ | ✅ |
| Find a Lawyer | ✅ | ✅ | ❌ | ✅ |
| Document Drafting | ❌ | ✅ | ✅ | ✅ |
| Voicenotes | ❌ | ❌ | ✅ | ✅ |

## 📖 How to Use Features Effectively

### 💬 AI Chat Interface
• Start with specific legal questions for better responses  
• Use the suggested prompts for common legal scenarios  
• Upload relevant documents to get contextual analysis  
• Enable web search for current legal updates  
• Save important conversations for future reference  

### ⚖️ Document Drafting
• Provide detailed instructions including parties, terms, and jurisdiction  
• Use voice dictation for hands-free document creation  
• Save drafts regularly to prevent data loss  
• Export to DOCX for professional formatting  
• Review and edit generated content before finalizing  

### 🔍 Deep Research
• Frame research queries with specific legal issues and jurisdictions  
• Use voice input for complex research questions  
• AI query optimization for better results  
• Save research sessions for ongoing cases  
• Export research with citations for court submissions  
• Verify sources and cross-reference findings  

### 🎤 Voicenotes
• Record clear audio in quiet environments for better transcription  
• Speak slowly and clearly for accurate voice recognition  
• Review and edit AI-polished notes before saving  
• Get structured legal analysis of consultation transcripts  
• Use descriptive titles for easy organization  
• Keep recordings focused on specific legal topics  

### 👨‍⚖️ Find a Lawyer
• Use specific keywords like "accident", "divorce", "criminal" for better matches  
• Filter by location to find lawyers in your area  
• Review practice areas and experience before contacting  
• Use both email and phone contact options  
• Prepare your case details before initial consultation  

## 💡 Best Practices & Tips

### ✅ Do's
• Be specific and detailed in your queries  
• Provide context and relevant case details  
• Use proper legal terminology when known  
• Save important conversations and drafts  
• Verify AI responses with legal professionals  
• Keep sensitive information confidential  

### ❌ Don'ts
• Don't rely solely on AI for legal advice  
• Don't share confidential client information  
• Don't use generated documents without review  
• Don't ignore jurisdiction-specific requirements  
• Don't skip professional legal consultation  
• Don't assume AI responses are legally binding  

## 🔧 Technical Requirements

### Browser Support
• Chrome/Chromium 90+ (Recommended)  
• Firefox 88+  
• Safari 14+  
• Edge 90+  

### Required Features
• JavaScript enabled  
• Local storage support  
• Microphone access (for voice features)  
• File upload support  

## 📞 Support & Contact

**Legal Disclaimer:** Dharmabot is an AI-powered legal assistant designed to provide general legal information and assistance. It is not a substitute for professional legal advice. Users should consult with qualified legal professionals for specific legal matters and important decisions.

---

© 2024 UB Intelligence. All rights reserved.  
**Dharmabot** - Empowering the Indian Legal Community with AI Technology.
`;

export const DocumentationView: React.FC<DocumentationViewProps> = ({ onBackToChat }) => {
  const htmlContent = marked.parse(documentationContent) as string;

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="flex-grow p-3 sm:p-4 md:p-6 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">
              Documentation
            </h1>
            <button
              onClick={onBackToChat}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-150"
            >
              ← Back to Chat
            </button>
          </div>
          
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 animate-fade-in-slide-up">
            <div 
              className="prose prose-sm md:prose-base prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};