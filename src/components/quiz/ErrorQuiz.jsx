export default function ErrorQuiz({ error }) {
  return <div>Error: {error.response.data.error}</div>;
}
