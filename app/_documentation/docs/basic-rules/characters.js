import { marked } from "marked";

const md = `
# Characters

## Character Creation

## Attributes

### Primary Attributes

### Secondary Attributes

## Skills
`;

const html = `${marked.parse(md)}`;

const rules = {
  html,
  title: "Characters"
}
export default rules;