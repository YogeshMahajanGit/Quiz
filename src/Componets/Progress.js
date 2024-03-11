function Progress({ index, queLenght, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={queLenght} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {queLenght}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
