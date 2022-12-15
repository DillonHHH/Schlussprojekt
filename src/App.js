import Confetti from 'react-dom-confetti';
import React from 'react';
import './App.css';
import yay from './yay.mp3';

const config = {
  angle: "152",
  spread: 360,
  startVelocity: "46",
  elementCount: "150",
  dragFriction: "0.11",
  duration: "4010",
  stagger: 3,
  width: "50px",
  height: "19px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function App() {
  const [isRight1, setIsRight1] = React.useState(false);
  const [isRight2, setIsRight2] = React.useState(false);
  const [isRight3, setIsRight3] = React.useState(false);
  const [isRight4, setIsRight4] = React.useState(false);

  const [isWrong11, setIsWrong11] = React.useState(false);
  const [isWrong12, setIsWrong12] = React.useState(false);
  const [isWrong21, setIsWrong21] = React.useState(false);
  const [isWrong22, setIsWrong22] = React.useState(false);
  const [isWrong31, setIsWrong31] = React.useState(false);
  const [isWrong32, setIsWrong32] = React.useState(false);
  const [isWrong41, setIsWrong41] = React.useState(false);
  const [isWrong42, setIsWrong42] = React.useState(false);


  const [isExploding1, setIsExploding1] = React.useState(false);
  const [isExploding2, setIsExploding2] = React.useState(false);
  const [isExploding3, setIsExploding3] = React.useState(false);
  const [isExploding4, setIsExploding4] = React.useState(false);

  const audio = new Audio(yay);

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <p className='topText'>

          Alle Antworten können ein wenig richtig sein, aber wählen sie die richtige!

        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='question'>
          <p className='questionText'>
            Warum hat Herr Biedermann die Brandstifter erlaubt, in seinem Haus zu wohnen?
          </p>
          <ol>
            <li><button onClick={() => { audio.play(); setIsExploding1(!isExploding1); setIsExploding1(!isExploding1); setIsRight1(true) }}><Confetti active={isExploding1} config={config} className='confetti' /> <p> Er wollte sich besser fühlen </p> </button> {isRight1 && <p className='correctOrNot correct'> Korrekt!</p>} </li>
            <li><button onClick={() => setIsWrong11(true)}><p> Er hat ihnen vertraut </p> </button> {isWrong11 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => setIsWrong12(true)}><p> Er hat nichts verdächtig bemerkte </p> </button><small><small> (verdächtig = suspicious) </small></small>{isWrong12 && <p className='correctOrNot'> FALSCH!</p>} </li>
          </ol>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='question'>
          <p className='questionText'>
            Brauchten Gregors Familie ihn, zu alle das Geld für sie machen?
          </p>
          <ol>
            <li><button onClick={() => setIsWrong21(true)}><p> Ja, seine Vater und Mutter waren beide ungesund und alt, und seine Schwester war zu jung zu arbeiten </p> </button> {isWrong21 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => setIsWrong22(true)}><p> Nein, er hat alle sein Geld gehalten, die Familie hat nichts bekommen </p> </button>{isWrong22 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => { audio.play(); setIsExploding2(!isExploding1); setIsRight2(true) }}><Confetti active={isExploding2} config={config} className='confetti' /> <p> Nein, sie alle könnten arbeiten, und sein Vater hat viel Geld versteckt </p> </button> {isRight2 && <p className='correctOrNot correct'> Korrekt!</p>} </li>
          </ol>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='question'>
          <p className='questionText'>
            Am Anfang, wie hat Der Kreis mit den Vierecken gelebt?
          </p>
          <ol>
            <li><button onClick={() => setIsWrong31(true)}><p> Er ist er selbst </p> </button> {isWrong31 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => setIsWrong32(true)}><p> Er ist sich weit weg von den Vierecken geblieben. </p> </button>{isWrong32 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => { audio.play(); setIsExploding3(!isExploding1); setIsRight3(true) }}><Confetti active={isExploding3} config={config} className='confetti' /> <p> Er hat sich wie ein Viereck verhalten</p> </button> {isRight3 && <p className='correctOrNot correct'> Korrekt!</p>} </li>
          </ol>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='question'>
          <p className='questionText'>
            Was für ein Zimmer hat der Marchese dem Ritter geben?
          </p>
          <ol>
            <li><button onClick={() => setIsWrong41(true)}><p> Er hat der Ritter gebeten, ein Hotel zu bekommen </p> </button> {isWrong41 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => { audio.play(); setIsExploding4(!isExploding1); setIsRight4(true) }}><Confetti active={isExploding4} config={config} className='confetti' /> <p> Ein sehr groß und sehr schön Zimmer </p> </button> {isRight4 && <p className='correctOrNot correct'> Korrekt!</p>} </li>
            <li><button onClick={() => setIsWrong42(true)}><p> Ein Zimmer voller Müll </p> </button>{isWrong42 && <p className='correctOrNot'> FALSCH!</p>} </li>
          </ol>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='question'>
          <p className='questionText'>
            Was bedeutet "vortäuschen" auf Englisch?
          </p>
          <ol>
            <li><button onClick={() => setIsWrong41(true)}><p> to lie </p> </button> {isWrong41 && <p className='correctOrNot'> FALSCH!</p>} </li>
            <li><button onClick={() => { audio.play(); setIsExploding4(!isExploding1); setIsRight4(true) }}><Confetti active={isExploding4} config={config} className='confetti' /> <p> to pretend </p> </button> {isRight4 && <p className='correctOrNot correct'> Korrekt!</p>} </li>
            <li><button onClick={() => setIsWrong42(true)}><p> to laugh </p> </button>{isWrong42 && <p className='correctOrNot'> FALSCH!</p>} </li>
          </ol>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className='topText'>

            Und was lehren sie uns alle? Seien sie vorsichtig mit Vortaüschen,
            weil sie sich selbst oder jemand anderen veletzen<small><small>(hurt)</small></small> könnten.
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header >
    </div >
  );
}

export default App;
