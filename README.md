### CareSync AI

CareSync AI is a comprehensive healthcare application that combines medical report analysis with emotional support through AI. The platform helps users understand their medical reports, track medications, and receive mental health support through an AI companion.




## 🌟 Features

- **Medical Report Analysis**: Upload and analyze medical reports to extract key information
- **MindMate AI Chat**: AI companion providing emotional support and wellness guidance
- **Multi-language Support**: Support for English and Hindi languages
- **Export Options**: Download or email your medical report summaries
- **Responsive Design**: Works seamlessly on desktop and mobile devices


## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons


## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn


## 🚀 Installation

1. **Clone the repository**


```shellscript
git clone https://github.com/yourusername/caresync-ai.git
cd caresync-ai
```

2. **Install dependencies**


```shellscript
npm install
# or
yarn install
```

3. **Set up shadcn/ui components**


```shellscript
npx shadcn@latest init
```

Follow the prompts to set up shadcn/ui with your preferences.

4. **Install required shadcn/ui components**


```shellscript
npx shadcn@latest add button card toast textarea tabs label select
```

5. **Run the development server**


```shellscript
npm run dev
# or
yarn dev
```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**


## 📖 Usage

### Homepage

The landing page provides an overview of CareSync AI's features and quick access to the main functionalities.

### Medical Report Upload and Analysis

1. Navigate to the "Analyze Report" page
2. Select your preferred language (English/Hindi)
3. Upload your medical report (JPG, PNG, or PDF)
4. Click "Analyze Report" to process the document
5. View the extracted information organized by medicine, dosage, duration, and precautions
6. Export the results as PDF or send via email


### MindMate AI Chat

1. Navigate to the "Talk to MindMate" page
2. Type your message in the input field
3. MindMate will respond with supportive messages
4. Use the "Journal Prompt" or "Relaxation Techniques" buttons for additional support


## 📁 Project Structure

```plaintext
caresync-ai/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── analyze/            # Medical report analysis page
│   ├── contact/            # Contact page
│   ├── mindmate/           # MindMate AI chat page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   └── navbar.tsx          # Navigation bar
├── lib/                    # Utility functions
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
# Example environment variables
NEXT_PUBLIC_APP_NAME=CareSync AI
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📝 Future Enhancements

- Integration with electronic health records (EHR)
- Medication reminders and scheduling
- Telemedicine consultation booking
- Health metrics tracking
- Community support forums

