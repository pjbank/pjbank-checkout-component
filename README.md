## PJBank checkout component

### Componente para auxiliar obtenção de token para o checkout em aplicações react.

| Prop | type | Description |
|--|--|--|
| credencial | string | dever ser fornecida uma credencial para a geração de token |
| onToken | function | função invocada quando o componente recebe o token |
| componentStyle | object | componente de estilo para o componente pai do input (wrapper) |
| inputProps | object | objeto com propriedades para o input, podem ser passadas quaisquer propriedades validas de um componente \<input type='text'>. As propriedades serão merjadas  para o input | 

#### Como utilizar
Começe instalando o componente.

    npm install --save pjbankcheckout

---

Importe o componente 

    import  Pjbankcheckout  from  'pjbankcheckout';

Depois de importado o componente basta utiliza-lo em sua aplicação.

   
    <Pjbankcheckout
	    inputProps={{
		    className: 'classe-teste'
		    placeholder: 'Insira os números de seu cartão'
		    ...
	    }}
	    credencial='xxxxxxxxxxxxxxxxxxx'
	    onToken={(token)=>console.log('O token: '+token)}
    />
