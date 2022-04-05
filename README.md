El ejercicio consistia en poner en uso lo aprendido hasta ahora con React, usando el UseState, UseEffect y los intervalos. Para ello había que elaborar un contador de segundos, haciendo uso de Bootstrap.

Para conseguirlo, establecimos 6 dígitos "independientes", los cuales tenían establecido cada uno un condicional particular y todos estaban sujetos al mismo intervalo de tiempo.

De esta manera, cuando el primer dígito, llegara a nueva, a través del condicional establecíamos que NO seguiría su conteo por encima de 9 y reiniciaría a cero, sin embargo, el segundo dígito ubicado a su izquierda, empezaría a contar, y así sucesivamente.


# Hello World with React boilerplate
<p>
  <a href="https://gitpod.io#https://github.com/4GeeksAcademy/react-hello.git"><img src="https://raw.githubusercontent.com/4GeeksAcademy/react-hello/master/open-in-gitpod.svg?sanitize=true" />
  </a>
</p>

This template is similar to create-react-app but it's meant for 4Geeks Academy students.

##### Download the boilerplate using git

```
$ git clone https://github.com/4GeeksAcademy/react-hello.git
$ cd react-hello
```

##### and install the npm package:
```
$ npm install
```

## Start coding!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
- `$ npm run start`

You can update the `styles/index.css` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.
