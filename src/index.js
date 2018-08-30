import React from "react";
import PropTypes from "prop-types";

class PJBankCheckout extends React.Component {

    constructor(props){
      super(props);
      this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        const { credencial, homologacao } = this.props;
        this.addScript(() => {
            window.superlogica.require("pjbank");
            window.superlogica.pjbank(
            "checkout_transparente",
            `${credencial}`,
            homologacao
            );
            this.tokenInput.addEventListener("change", this.onChange);
        });
    }
  
    componentWillUnmount() {
        this.tokenInput.removeEventListener("change", this.onChange);
        this.removeScript('pjbankscript');
    }
  
    onChange({target}){
        const token = target.value;
        if(token){
            this.props.onData({
                token: token,
                bandeira: this.bandeira.value
            });
        }
    };
  
    addScript(callback) {
        const script = document.createElement("script");
        script.src = "https://s3-sa-east-1.amazonaws.com/widgets.superlogica.net/embed.js";
        script.async = true;
        script.id = "pjbankscript";
        document.body.appendChild(script);
        script.onload = () => {
            callback&& callback();
        };
    }
  
    removeScript(id){
        const script = document.getElementById(id);
        script.parentNode.removeChild(script);
    }

    render() {
        const { inputProps: { className, ...rest } } = this.props;
        return (
            <div style={this.props.componentStyle}>
                <input
                    {...rest }
                    className={`pjbank-cartao ${className}`}
                    id="cartao"
                />
                <input
                    ref={t => (this.tokenInput = t)}
                    type="hidden"
                    name="pjbank-token"
                    className="pjbank-token"
                />
                <input 
                    ref={bandeira => this.bandeira = bandeira}
                    type="hidden" 
                    id="bandeira" 
                    name="pjbank-cartao-bandeira" 
                    className="pjbank-cartao-bandeira"/>
            </div>
        );
    }
  }
  
  PJBankCheckout.propTypes = {
    placeholder: PropTypes.string,
    credencial: PropTypes.string.isRequired,
    homologacao: PropTypes.bool,
    onData: PropTypes.func,
    inputProps: PropTypes.object,
    componentStyle: PropTypes.object
  };
  
  PJBankCheckout.defaultProps = {
    onData: ()=>{},
    inputProps: {},
    homologacao: false
}

export default PJBankCheckout;