const resumeDescriptions = {
    "ai-video-analyzer": {
        mission: "To eliminate the tedious chore of watching hours of video content by instantly transforming any YouTube URL into an interactive, structured, and searchable knowledge asset.",
        tech: "Streamlit, Google GenAI SDK, Gemini 3.1 Flash Lite, Python",
        details: "This project is a Streamlit dashboard that leverages the gemini-3.1-flash-lite model to automatically summarize and analyze YouTube videos.",
        streamlit: "https://ai-youtube-video-analyzer09.streamlit.app"
    },
    "resume-analyzer": {
        mission: "Job seekers often struggle to optimize their resumes for rigid Applicant Tracking Systems (ATS), leading to immediate automated rejections. This application solves that by instantly analyzing uploaded resumes against modern recruiting algorithms.",
        tech: "Python, Streamlit, Google GenAI SDK, Pydantic, PyPDF2",
        details: "A production-ready AI application that extracts raw text from PDF resumes and processes it through a strict schema-enforced LLM pipeline.",
        streamlit: "https://resume-analyzer09.streamlit.app"
    },
    "react-ai-agent": {
        mission: "This project solves the problem of heavy framework dependency by building a lightweight, zero-dependency ReAct (Reasoning + Acting) AI agent.",
        tech: "Python 3, Regular Expressions, Groq API, Streamlit, Jupyter Notebook",
        details: "Implements an active Think --> Act --> Observe loop that matches LLM outputs to native Python tools.",
        streamlit: "https://react-ai-agent09.streamlit.app"
    },
    "weather-forecast": {
        mission: "It eliminates the need for developers to host expensive backend infrastructure by allowing users to securely bring their own OpenWeatherMap API key.",
        tech: "Python, Streamlit, OpenWeatherMap API, Pandas",
        details: "A lightweight, modular dashboard that fetches real-time weather metrics for any city globally.",
        streamlit: "https://ai-weather-forecast09.streamlit.app"
    },
    "fake-news-prediction": {
        mission: "Automates the detection of online misinformation by automatically classifying news articles as Real or Fake.",
        tech: "Python, PorterStemmer, Scikit-Learn, Pandas, SVM",
        details: "Cleaned raw news text using stemming and TF-IDF vectorization to train a classifier with over 90% accuracy.",
        streamlit: "https://fake-news-prediction09.streamlit.app" 
    },
    "diabetes-prediction-ml": {
        mission: "Early detection of diabetes is critical to preventing severe, long-term health complications by instantly evaluating patient metabolic metrics.",
        tech: "Python, Pandas, Scikit-Learn, StandardScaler, SVM, Streamlit",
        details: "Standardizes 8 core patient physiological metrics to train a linear Support Vector Classifier.",
        streamlit: "https://diabetes-prediction09.streamlit.app"
    },
    "gemini-3.5_chat_bot": {
        mission: "Solves the problem of building a responsive, context-aware conversational AI interface allowing users to chat with Google's Gemini model.",
        tech: "Python, Streamlit, Google GenAI SDK (google-genai)",
        details: "An interactive chatbot application maintaining multi-turn session history with secure configuration handling.",
        streamlit: "https://chat-bot09.streamlit.app"
    },
    "sonar-vs-rock": {
        mission: "Solves the challenge of identifying underwater objects by automatically classifying sonar return signals to distinguish dangerous mines from rocks.",
        tech: "Python, NumPy, Pandas, Scikit-learn, Streamlit",
        details: "Interactive machine learning dashboard powered by a Logistic Regression model.",
        streamlit: "https://sonar-vs-rock09.streamlit.app"
    },
    "house-price-prediction": {
        mission: "Solves the challenge of estimating California housing market prices by leveraging machine learning to predict median district values based on geographic and demographic features.",
        tech: "Python, Streamlit, Scikit-Learn, XGBoost, Pandas, and NumPy.",
        details: "An end-to-end data science project utilizing the California Housing dataset to train an XGBoost regression model, deployed via an interactive Streamlit web dashboard for real-time predictions.",
        streamlit: "https://house-price-prediction09.streamlit.app"
    }
};

const defaultProject = {
    mission: "Core architecture currently being synthesized and compiled in local development environment.",
    tech: "Python, Experimental Branch, In-Progress",
    details: "Tactical module under active development. Telemetry nodes will be initialized upon deployment completion."
};
