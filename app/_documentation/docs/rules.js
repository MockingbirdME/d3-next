import characters from "./basic-rules/characters";
import skillChecks from "./basic-rules/skillChecks";

const chaptersList = [ characters, skillChecks ];

const fullHtml = chaptersList.map(chapter => `<h1>${chapter.title || ""}</h1>${chapter.html}`).join("<br />");

const rules = {
  chapters: chaptersList,
  all: fullHtml
};

export default rules;