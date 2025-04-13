
import { useState } from "react";

export default function Home() {
  const [match, setMatch] = useState("");
  const [odds, setOdds] = useState("");
  const [chance, setChance] = useState("");
  const [result, setResult] = useState(null);

  const calculateEV = () => {
    const oddsNum = parseFloat(odds);
    const chanceNum = parseFloat(chance) / 100;
    const ev = oddsNum * chanceNum;

    let message = "";
    if (ev > 1) message = "Стойностен залог!";
    else if (ev === 1) message = "На границата на стойност.";
    else message = "По-добре пропусни този залог.";

    setResult({ ev: ev.toFixed(2), message });
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 20, fontFamily: 'Arial' }}>
      <h2>Value Bet Калкулатор</h2>
      <input placeholder="Мач" value={match} onChange={(e) => setMatch(e.target.value)} style={{ width: '100%', padding: 10, marginBottom: 10 }} />
      <input placeholder="Коефициент" value={odds} onChange={(e) => setOdds(e.target.value)} type="number" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
      <input placeholder="Твоя оценка (%)" value={chance} onChange={(e) => setChance(e.target.value)} type="number" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
      <button onClick={calculateEV} style={{ width: '100%', padding: 10, backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Изчисли</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p><strong>Очаквана стойност (EV):</strong> {result.ev}</p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}
