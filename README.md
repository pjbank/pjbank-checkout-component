## PJBank checkout input component

### Componente para auxiliar obtenção de token para o checkout em aplicações react.

| Prop | type | Description |
|--|--|--|
| credencial | string | dever ser fornecida uma credencial para a geração de token |
| homologacao | boolean | Se for passado `true` é trocado para o ambiente de homologação |
| onData | function | Retorna um objeto no formato: `{token:'xxxxxx', bandeira:'xxxxxx'}`, que contém o token e a bandeira do cartão |
| inputProps | object |objeto com propriedades para o input, podem ser passadas quaisquer propriedades validas de um componente \<input  type='text'>. As propriedades serão merjadas para o input| 

#### Como utilizar
Começe instalando o componente.

    npm install --save pjbankcheckout
---

Importe o componente 

    import Pjbankcheckout from 'pjbankcheckout';

Depois de importado o componente basta utiliza-lo em seu projeto.

   
    <Pjbankcheckout
	    inputProps={{
		    fontSize: 20
		    ...
	    }}
	    credencial='xxxxxxxxxxxxxxxxxxx'
	    onData={(data)=>console.log('O token: '+ data.token + 'bandeira'+ data.bandeira)}
    />
