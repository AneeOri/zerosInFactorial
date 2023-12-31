import "./styles.css";

export default function App() {
  function numeroDeCeros(n) {
    let fivesMult = 1;
    let sum = 0;

    while (fivesMult <= n) {
      sum = Math.floor(sum + n / (fivesMult *= 5));
    }
    console.log(sum);
  }

  function zeros(n) {
    var zs = 0;
    while (n > 0) {
      n = Math.floor(n / 5);
      zs += n;
    }
    return zs;
  }

  function zeros(n) {
    return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
  }

  function zeros(n) {
    var res = 0;
    for (var i = 5; i < n; i *= 5) res += Math.floor(n / i);
    return res;
  }

  const n = 1;
  numeroDeCeros(n);

  return (
    <div className="App">
      <input />
    </div>
  );
}
