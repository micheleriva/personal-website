import { useState, useEffect } from "react";
import { shuffleArray } from "../utils";
import { Container } from "./Container";
import { phrases, emojis } from "../data/phrases.json";

export function Phrase() {
  const [phrase, setPhrase] = useState(" ");
  const [emoji, setEmoji] = useState(" ");

  useEffect(() => {
    const randomPhrase = shuffleArray(phrases)[0];
    const randomEmoji = shuffleArray(emojis)[0];
    setPhrase(randomPhrase);
    setEmoji(randomEmoji);
  }, []);

  return (
    <Container size="2xl">
      <div className="text-white text-sm text-center">
        {emoji} {phrase}
      </div>
    </Container>
  )
}