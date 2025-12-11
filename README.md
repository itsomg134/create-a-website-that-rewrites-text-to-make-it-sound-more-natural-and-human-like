# 🪄 Text Humanizer

Transform robotic, AI-generated text into natural, conversational language with the power of Claude AI.

![Text Humanizer Banner](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge) ![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ What is Text Humanizer?

Text Humanizer is a web application that takes stiff, robotic, or overly formal text and rewrites it to sound like it was written by a real person. Perfect for:

- Making AI-generated content sound more natural
- Simplifying complex technical writing
- Converting formal documents into friendly communication
- Improving readability of any text

## 🎯 Features

- **AI-Powered Rewriting** - Uses Claude Sonnet 4 for intelligent text transformation
- **Side-by-Side Comparison** - See your original and humanized text together
- **Real-Time Processing** - Get results in seconds
- **Character Counter** - Track text length as you type
- **One-Click Copy** - Easily copy humanized text to clipboard
- **Clean, Modern UI** - Beautiful gradient design with smooth animations
- **Responsive Design** - Works perfectly on desktop and mobile


## 📸 Screenshots

<img width="1911" height="977" alt="image" src="https://github.com/user-attachments/assets/8bcf73e9-7442-4388-9458-579638f63fa2" />

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Model**: Claude Sonnet 4 (Anthropic API)

## 📦 Installation

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/text-humanizer.git
cd text-humanizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## 🔧 Configuration

The app uses the Anthropic API. The API calls are handled automatically when deployed on Claude.ai artifacts. If you're running this elsewhere, you'll need to:

1. Get an API key from [Anthropic Console](https://console.anthropic.com/)
2. Add it to your environment variables:
```bash
REACT_APP_ANTHROPIC_API_KEY=your_api_key_here
```

## 💻 Usage

1. **Paste Your Text**: Copy and paste the text you want to humanize into the left text area
2. **Click "Humanize Text"**: Press the button to start the AI transformation
3. **Review Results**: See the natural, conversational version appear on the right
4. **Copy & Use**: Click the copy button and paste your humanized text anywhere

### Example

**Before (Robotic):**
> "It is imperative to acknowledge that the implementation of artificial intelligence technologies necessitates comprehensive evaluation of potential ramifications across multiple operational domains."

**After (Humanized):**
> "We need to carefully think through how AI will affect different parts of our operations before we roll it out."

## 🎨 Customization

### Changing Colors

Edit the Tailwind classes in the component to match your brand:

```jsx
// Change gradient background
className="bg-gradient-to-br from-purple-50 via-white to-blue-50"

// Change button colors
className="bg-gradient-to-r from-purple-600 to-blue-600"
```

### Adjusting Text Areas

Modify the textarea height:
```jsx
className="w-full h-80" // Change h-80 to your preferred height
```

## 📝 API Details

The app uses Claude's API with the following configuration:

- **Model**: `claude-sonnet-4-20250514`
- **Max Tokens**: 1000
- **Endpoint**: `https://api.anthropic.com/v1/messages`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Powered by [Anthropic's Claude AI](https://www.anthropic.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 👨‍💻 Author

Om Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app
