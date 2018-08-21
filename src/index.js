import React from "react";
import PropTypes from "prop-types";

class PJBankCheckout extends React.Component {

    constructor(props){
      super(props);
      this.onToken = this.onToken.bind(this);
    }
    componentDidMount() {
      this.addScript(() => {
        window.superlogica.require("pjbank");
        window.superlogica.pjbank(
          "checkout_transparente",
          `${this.props.credencial}`
        );
        this.tokenInput.addEventListener("change", this.onToken);
      });
    }
  
    componentWillUnmount() {
      this.tokenInput.removeEventListener("change", this.onToken);
      this.removeScript('pjbankscript');
    }
  
    onToken(evt){
      this.props.onToken(evt.target.value);
    };
  
    addScript(callback) {
      const script = document.createElement("script");
      script.src =
        "https://s3-sa-east-1.amazonaws.com/widgets.superlogica.net/embed.js";
      script.async = true;
      script.id = "pjbankscript";
      document.body.appendChild(script);
      script.onload = () => {
        callback && callback();
      };
    }
  
    removeScript(id){
        const script = document.getElementById(id);
        script.parentNode.removeChild(script);
        return false;
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
        </div>
      );
    }
  }
  
  PJBankCheckout.propTypes = {
    credencial: PropTypes.string.isRequired,
    onToken: PropTypes.func,
    inputProps: PropTypes.object,
    componentStyle: PropTypes.object
  };
  
  PJBankCheckout.defaultProps = {
      onToken: ()=>{}
  }
  export default PJBankCheckout;