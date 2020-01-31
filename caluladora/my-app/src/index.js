import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Botao(props){
  return(
    <button className="botao"
            onClick = {props.onClick}>
             {props.value}
    </button>
  );
}

class Teclado extends React.Component{
  renderBotao(valor){
    return(
      <Botao value = {[valor]}
             onClick = {() => this.props.onClick(valor) }/> 
    )
  }

  render(){
    return(
      <div className= "calculadora">
        <div className = "bordas">
          { this.renderBotao(7) }
          { this.renderBotao(8) }
          { this.renderBotao(9) }
          { this.renderBotao("/") }
        </div>
        <div className = "bordas">
          { this.renderBotao(4) }
          { this.renderBotao(5) }
          { this.renderBotao(6) }
          { this.renderBotao("*") }
        </div>
        <div className = "bordas">
          { this.renderBotao(1) }
          { this.renderBotao(2) }
          { this.renderBotao(3) }
          { this.renderBotao("-") }
        </div>
        <div className = "bordas">
          { this.renderBotao(0) }
          { this.renderBotao("C") }
          { this.renderBotao("=") }
          { this.renderBotao("+") }
        </div>
      </div>
    )
  }
}

class Calculadora extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      valor:"0",
      valorOld:"0",
      novoValor:false,
    };
  }
  handleClick(valores){ 
    if (this.state.novoValor == true) {
      this.state.valor ="0";
      this.state.novoValor = false;
    } 
    
    if (valores == "C"){
      this.state.valor = "0";
      this.state.valorOld = "0";
    }else{
      if (valores == "="){
        this.state.valorOld =  this.state.valorOld + this.state.valor ;
        this.state.valor = eval( this.state.valorOld);
        this.state.valorOld =  this.state.valorOld + valores;

      }else{
        if(valores == "+" || 
           valores == "-" ||
           valores == "*" ||
           valores == "/" ){
             this.state.valorOld = this.state.valor + valores;
             this.state.novoValor = true;
             
        }else{
          if (this.state.valor == "0"){
            this.state.valor= ""+ valores;
          }else{
            this.state.valor = this.state.valor + valores;
          }
        }
      } 
    }  
   this.setState({});   
  }
  render(){    
    return(     

      <div className= "calcula">
        <div className= "calcula-board">          
          <div className = "visor">
            <div>{this.state.valorOld} </div>
          </div>
          <div className = "visor">
            <div>{this.state.valor} </div>
          </div>
          <Teclado 
            onClick = {(valor)=>this.handleClick(valor)}/>             
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculadora />,
  document.getElementById('root')  
);
