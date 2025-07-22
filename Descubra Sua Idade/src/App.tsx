import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import './App.css'

function App() {

  //Variaveis

  const [inputNome, setInputNome] = useState<string>("");
  const [inputAno, setInputAno] = useState<number>(0);
  const [mostrarTexto, setMostrarTexto] = useState<boolean>(false);

  const meuInputNomeRef = useRef<HTMLInputElement>(null);
  const anoAtual = new Date().getFullYear();


  //Hooks

  useEffect(() => {
  meuInputNomeRef.current?.focus();
  }, [meuInputNomeRef])


  const CalculoIdade = useMemo(() => {
    return anoAtual - inputAno;
  }, [inputAno])


  const Confirmar = useCallback(() => {
    
    if(inputNome !== "" && inputAno > 1900 && inputAno <= anoAtual){
     setMostrarTexto(true)
    }else{
     alert("Dados inválidos, preencha corretamente")
    }

  }, [inputNome, inputAno])


  //HTML

 return (
  
<div className="container">
  
  <header>
    <h1>Descubra sua idade</h1>
  </header>
  <section className='section-principal'>
  <label htmlFor="nome">Digite seu nome:
    <input type="text" name="nome" id="nome" value={inputNome} onChange={(e) => setInputNome(e.target.value)} ref={meuInputNomeRef}/>
  </label>
  <br />
  <label htmlFor="ano">Digite seu Ano:
    <input type="text" name="ano" id="ano" value={inputAno} onChange={(e) => setInputAno(Number(e.target.value))}/>
  </label>
<button onClick={Confirmar}>Descobrir idade</button>
</section>

{mostrarTexto &&  <p>Seu nome é {inputNome} e sua idade é {CalculoIdade}</p>}
 
</div>

  );
}

export default App
