import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface DocumentationViewProps {
  onBackToChat: () => void;
}

export const DocumentationView: React.FC<DocumentationViewProps> = ({ onBackToChat }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="flex-grow p-2 sm:p-3 md:p-4 lg:p-6 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-100">
              Dharmabot Documentation
            </h1>
            <button
              onClick={onBackToChat}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors whitespace-nowrap"
            >
              ← Back to Chat
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4">
              Welcome to Dharmabot
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Dharmabot is a comprehensive AI-powered legal assistant designed specifically for the Indian legal community. 
              Our platform serves legal professionals, law students, judges, and citizens with intelligent tools for legal research, 
              document drafting, case analysis, and professional networking.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 sm:p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                🤖 Powered by Google Gemini AI
              </h3>
              <p className="text-blue-700 dark:text-blue-200 text-xs sm:text-sm">
                Dharmabot leverages Google's advanced Gemini AI technology to provide accurate, contextual legal assistance 
                specifically trained on Indian laws and legal procedures.
              </p>
            </div>
          </div>

          {/* Core Features Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
              🚀 Core Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* AI Chat Interface */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 flex items-center">
                  💬 AI Chat Interface
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 sm:space-y-2">
                  <li>• Natural language conversations with specialized legal AI</li>
                  <li>• Contextual understanding of Indian law</li>
                  <li>• Multi-turn conversations with memory</li>
                  <li>• 300+ curated legal prompts</li>
                  <li>• Smart auto-complete suggestions</li>
                </ul>
              </div>

              {/* Document Analysis */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 flex items-center">
                  📄 Document Analysis
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 sm:space-y-2">
                  <li>• Multi-format support (PDF, DOCX, TXT, Images)</li>
                  <li>• Advanced PDF processing with OCR</li>
                  <li>• Intelligent legal document analysis</li>
                  <li>• Batch processing up to 5 documents</li>
                  <li>• Real-time processing status</li>
                </ul>
              </div>

              {/* Legal Research */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 flex items-center">
                  🔍 Deep Research Portal
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 sm:space-y-2">
                  <li>• Comprehensive legal research with web integration</li>
                  <li>• Voice query input for hands-free operation</li>
                  <li>• Query optimization for enhanced AI understanding</li>
                  <li>• Research session management</li>
                  <li>• Professional DOCX export with citations</li>
                  <li>• Source verification and links</li>
                </ul>
              </div>

              {/* Document Drafting */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 flex items-center">
                  ⚖️ Document Drafting
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 sm:space-y-2">
                  <li>• AI-powered legal document generation</li>
                  <li>• 300+ Indian legal document templates</li>
                  <li>• Voice dictation support</li>
                  <li>• Rich text editor with legal formatting</li>
                  <li>• Professional DOCX and TXT export</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voicenotes Features */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-purple-200 dark:border-purple-700">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4 sm:mb-6">
              🎤 Neeti - Audio Legal Assistant
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2 sm:mb-3">
                  🎙️ Voice Capabilities
                </h3>
                <ul className="text-xs sm:text-sm text-purple-600 dark:text-purple-200 space-y-1 sm:space-y-2">
                  <li>• Voice-based interaction with natural language processing</li>
                  <li>• Real-time voice recognition and legal support</li>
                  <li>• Beautiful 3D visualization of voice interactions</li>
                  <li>• Hands-free legal consultation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2 sm:mb-3">
                  📚 Legal Analysis
                </h3>
                <ul className="text-xs sm:text-sm text-purple-600 dark:text-purple-200 space-y-1 sm:space-y-2">
                  <li>• Structured legal consultation analysis</li>
                  <li>• Key legal issues identification</li>
                  <li>• Possible remedies and follow-up actions</li>
                  <li>• Referenced legal sources and citations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Roles & Access */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
              👥 User Roles & Access Levels
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-slate-800 dark:text-white">Feature</th>
                    <th className="text-center py-2 sm:py-3 px-1 sm:px-4 font-semibold text-slate-800 dark:text-white">Citizen</th>
                    <th className="text-center py-2 sm:py-3 px-1 sm:px-4 font-semibold text-slate-800 dark:text-white">Law Student</th>
                    <th className="text-center py-2 sm:py-3 px-1 sm:px-4 font-semibold text-slate-800 dark:text-white">Judge</th>
                    <th className="text-center py-2 sm:py-3 px-1 sm:px-4 font-semibold text-slate-800 dark:text-white">Lawyer</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">AI Chat</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">Document Upload</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">Find a Lawyer</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">❌</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">Document Drafting</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">❌</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">Voicenotes</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">❌</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">❌</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                    <td className="text-center py-2 sm:py-3 px-1 sm:px-4">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Use Features */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
              📖 How to Use Features Effectively
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {/* AI Chat */}
              <div className="border-l-4 border-red-500 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  💬 AI Chat Interface
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Start with specific legal questions for better responses</li>
                  <li>• Use the suggested prompts for common legal scenarios</li>
                  <li>• Upload relevant documents to get contextual analysis</li>
                  <li>• Enable web search for current legal updates</li>
                  <li>• Save important conversations for future reference</li>
                </ul>
              </div>

              {/* Document Drafting */}
              <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  ⚖️ Document Drafting
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Provide detailed instructions including parties, terms, and jurisdiction</li>
                  <li>• Use voice dictation for hands-free document creation</li>
                  <li>• Save drafts regularly to prevent data loss</li>
                  <li>• Export to DOCX for professional formatting</li>
                  <li>• Review and edit generated content before finalizing</li>
                </ul>
              </div>

              {/* Research Portal */}
              <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  🔍 Deep Research
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Frame research queries with specific legal issues and jurisdictions</li>
                  <li>• Use voice input for complex research questions</li>
                  <li>• AI query optimization for better results</li>
                  <li>• Save research sessions for ongoing cases</li>
                  <li>• Export research with citations for court submissions</li>
                  <li>• Verify sources and cross-reference findings</li>
                </ul>
              </div>

              {/* Voicenotes */}
              <div className="border-l-4 border-purple-500 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  🎤 Voicenotes
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Record clear audio in quiet environments for better transcription</li>
                  <li>• Speak slowly and clearly for accurate voice recognition</li>
                  <li>• Review and edit AI-polished notes before saving</li>
                  <li>• Get structured legal analysis of consultation transcripts</li>
                  <li>• Use descriptive titles for easy organization</li>
                  <li>• Keep recordings focused on specific legal topics</li>
                </ul>
              </div>

              {/* Find a Lawyer */}
              <div className="border-l-4 border-teal-500 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  👨‍⚖️ Find a Lawyer
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Use specific keywords like "accident", "divorce", "criminal" for better matches</li>
                  <li>• Filter by location to find lawyers in your area</li>
                  <li>• Review practice areas and experience before contacting</li>
                  <li>• Use both email and phone contact options</li>
                  <li>• Prepare your case details before initial consultation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
              💡 Best Practices & Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3">
                  ✅ Do's
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 sm:space-y-2">
                  <li>• Be specific and detailed in your queries</li>
                  <li>• Provide context and relevant case details</li>
                  <li>• Use proper legal terminology when known</li>
                  <li>• Save important conversations and drafts</li>
                  <li>• Verify AI responses with legal professionals</li>
                  <li>• Keep sensitive information confidential</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3">
                  ❌ Don'ts
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 sm:space-y-2">
                  <li>• Don't rely solely on AI for legal advice</li>
                  <li>• Don't share confidential client information</li>
                  <li>• Don't use generated documents without review</li>
                  <li>• Don't ignore jurisdiction-specific requirements</li>
                  <li>• Don't skip professional legal consultation</li>
                  <li>• Don't assume AI responses are legally binding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
              🔧 Technical Requirements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3">
                  Browser Support
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Chrome/Chromium 90+ (Recommended)</li>
                  <li>• Firefox 88+</li>
                  <li>• Safari 14+</li>
                  <li>• Edge 90+</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3">
                  Required Features
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• JavaScript enabled</li>
                  <li>• Local storage support</li>
                  <li>• Microphone access (for voice features)</li>
                  <li>• File upload support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support & Contact */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4">
              📞 Support & Contact
            </h2>
            <div className="bg-slate-50 dark:bg-slate-700 p-3 sm:p-4 rounded-lg">
              <p className="text-slate-600 dark:text-slate-300 mb-2 text-xs sm:text-sm">
                <strong>Legal Disclaimer:</strong> Dharmabot is an AI-powered legal assistant designed to provide general legal information and assistance. 
                It is not a substitute for professional legal advice. Users should consult with qualified legal professionals for specific legal matters and important decisions. 
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <strong>© 2024 UB Intelligence.</strong> All rights reserved. Dharmabot - Empowering the Indian Legal Community with AI Technology.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};