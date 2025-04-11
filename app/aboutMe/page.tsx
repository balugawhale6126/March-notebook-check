"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

export default function AboutMePage() {
  let facts: string[] = [
    "The shortest war in history, the Anglo-Zanzibar war, lasted 38 minutes.",
    "NFL Super Bowl referees also get Super Bowl rings.",
    "The average cloud weighs over one million pounds.",
    "Your brain alone burns around 400 to 500 calories each day.",
    "Approximately 10% of people are left-handed.",
    "The plastic or metal tip of your shoelace is called an aglet.",
    "Baby hedgehogs are called hoglets.",
    "Pineapples can take two to three years to fully grow.",
    "A mile is 5,280 feet long. ",
  ];

  const [fact, setFact] = useState("");

  return (
    <div style={{ flexDirection: "column" }}>
      <img
        alt="no fish"
        height="500"
        src="https://images.unsplash.com/photo-1515631604561-23e0be68ee06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="500"
      />
      <h1>I think fishing is really cool</h1>
      <a
        className="underline hover:inderline text-red-600"
        href="https://wdfw.wa.gov/species-habitats/species"
      >
        <Button href="https://wdfw.wa.gov/species-habitats/species">
          Fish
        </Button>
      </a>
      <div style={{ flexDirection: "row" }}>
        <Button
          className={"mt-5"}
          href=""
          onPress={() => {
            setFact(facts[Math.floor(Math.random() * facts.length)]);
          }}
        >
          {" "}
          Click 4 Fact{" "}
        </Button>
        <p className={"mt-10"}>{fact}</p>
      </div>
    </div>
  );
}
