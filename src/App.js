import Header from './components/Header/index.js';
import StatTopBar from './components/StatTopBar/index.js';
import TextArea from './components/TextArea/index.js';
import StatBottomBar from './components/StatBottomBar/index.js';
import Footer from './components/Footer/index.js';
import { useState } from 'react';
import { pronouns as pronounsData } from './data/pronouns.js';

function App() {
  const [text, setText] = useState('');
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [pronouns, setPronouns] = useState(0);
  const [longWord, setLongWord] = useState("-");
  const [averageTime, setAverageTime] = useState("-");

  function handleTextChange(event) {
    const text = event.target.value;
    const words = text.split(/[.?! ]/);
    const wordCount = words.filter((word) => word.trim().length > 0).length;
    const characters = text.length;
    const sentences = text.split(/[.?!]/).filter((s) => s.trim().length > 0).length;
    const paragraphs = text.split(/\n/).filter((p) => p.trim().length > 0).length;
    const pronouns = words.filter((word) => pronounsData.includes(word.toLowerCase())).length;
    let longWord = words.reduce((longest, word) => word.length > longest.length ? word : longest);
    let averageTime = Math.round(wordCount / 225);
    if (wordCount > 0 && averageTime == 0) {
      averageTime = 1;
    }
    let averageTimeText = "~" + averageTime + " minute";
    if (averageTime > 1) {
      averageTimeText += "s";
    }

    setText(event.target.value);
    setWords(wordCount);
    setCharacters(characters);
    setSentences(sentences);
    setParagraphs(paragraphs);
    setPronouns(pronouns);
    setLongWord(longWord);
    setAverageTime(averageTimeText);
  }

  return (
    <div>
      <Header />
      <div className="small-container">
        <div className="main-app">
          <StatTopBar words={words} characters={characters} sentences={sentences} paragraphs={paragraphs} pronouns={pronouns} />
          <TextArea value={text} onChange={handleTextChange} />
          <StatBottomBar averageTime={averageTime} longWord={longWord} />
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default App
