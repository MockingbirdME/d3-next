import rules from "../_documentation/docs/rules";

export default function Rules() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Content Coming Soon</h1>
      <div className="" dangerouslySetInnerHTML={{ __html: rules.all }} />
    </main>
  );
}
