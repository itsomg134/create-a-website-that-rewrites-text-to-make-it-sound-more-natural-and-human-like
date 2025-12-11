import React, { useState } from 'react';
import { Wand2, Copy, Check } from 'lucide-react';

export default function TextHumanizer() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const humanizeText = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            { 
              role: "user", 
              content: `Rewrite the following text in natural, human-like language. Make it sound clear, conversational, and easy to read. Remove robotic tone, overly complex wording, and repetitive phrases. Keep the original meaning the same, but make it feel like it was written by a real person. Only provide the rewritten text without any explanations or preamble.

Text to rewrite:
${inputText}`
            }
          ],
        })
      });

      const data = await response.json();
      const rewrittenText = data.content
        .map(item => (item.type === "text" ? item.text : ""))
        .filter(Boolean)
        .join("\n");
      
      setOutputText(rewrittenText);
    } catch (error) {
      setOutputText("Sorry, something went wrong. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInputText('');
    setOutputText('');
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Text Humanizer
          </h1>
          <p className="text-gray-600 text-lg">
            Transform robotic text into natural, conversational language
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Original Text</h2>
              <span className="text-sm text-gray-500">{inputText.length} characters</span>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full h-80 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none resize-none text-gray-700"
            />
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Humanized Text</h2>
              {outputText && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>
            <div className="w-full h-80 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 overflow-y-auto">
              {outputText ? (
                <p className="text-gray-700 whitespace-pre-wrap">{outputText}</p>
              ) : (
                <p className="text-gray-400 italic">Your humanized text will appear here...</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={humanizeText}
            disabled={!inputText.trim() || isProcessing}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
          >
            <Wand2 size={20} />
            {isProcessing ? 'Humanizing...' : 'Humanize Text'}
          </button>
          
          <button
            onClick={clearAll}
            className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Tips for Best Results</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Works great with AI-generated content, formal writing, or technical jargon</li>
            <li>• Best for paragraphs and full sentences rather than single words</li>
            <li>• The tool preserves your original meaning while making it sound more natural</li>
            <li>• Perfect for emails, blog posts, social media, and everyday communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}