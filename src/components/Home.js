import React from "react";
import Section from "./Section";
import sectionData from "./sectionData.json";

function Home() {
  return (
    <div>
      {sectionData.data.map((element) => (
        <Section
          id={element.id}
          key={element.id}
          title={element.title}
          description={element.description}
          backgroundImg={element.backgroundImg}
          leftBtnText={element.leftBtnText}
          rightBtnText={element.rightBtnText}
        />
      ))}
    </div>
  );
}

export default Home;
