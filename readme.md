# Vuetify and JS utils pack

This package have Vuetify/Nuxt an JS utils funcions and mixins, more especifily (but not only) for braziliam (pt-BR) projects.
Esse projeto contem codigos utils incluindo mixers para Vuetify/Nuxt, mas especificamente (mas não exclusivamente) para projetos brasileros.

## Install

```bash
yarn add vuetify-js-utils
# or
npm install --save vuetify-js-utils
```
### Eg. Validate CPF or CNPJ (validar CPF ou CNPJ)

```vue
<template>
  <v-textfield label="CPF/CNPJ" :rules="[rules.required, rules.cpfOrCnpj]" />
</template>

<script>
  import { OnRules } from 'vuetify-js-utils'

  export default {
    mixins: [OnRules]
  }
</scipt>
````
### All validates rules
- required: 'Campo obrigatório',
- array: 'Campo obrigatório',
- object: 'Campo obrigatório',
- date: 'Campo obrigatório' (YYYY-MM-DD) *need inproves, currently just check length*,
- email: 'E-mail deve ser válido',
- min6: 'Ao menos 6 caracteres.',
- minLenght(min: number, message: String),
- maxLenght(max: number, message: String),
- id: 'Apenas letras minúsculas, numeros e hifens são permitidos'
- cpf: v => checkCpf(v) || 'CPF inválido.',
- npj: v => checkCnpj(v) || 'CNPJ inválido.',
- cpfOrCnpj: v => checkCpf(v) || checkCnpj(v) || 'CPF ou CNPJ inválido.'

### All JS utils Functions

- **arraySearch(String: prop, String: value, Array: array, Boolean: returnIndex)**
  - Retorna o primeiro objeto ou seu index que ter o "value" igual contido na prop informada dentro de um Array de Objetos.

- **checkCpf(String: cpf)**
  - Retorna o Boolean se o CPF informado é uma formato válido ou não de acordo com o digito verificador.

- **checkCnpj(String: cpf)**
  - Retorna o Boolean se o CNPJ informado é uma formato válido ou não de acordo com o digito verificador.

- **checkCnpj(String: cpf)**
  - Retorna o Boolean se o CNPJ informado é uma formato válido ou não de acordo com o digito verificador.

- **copyToClipboard(String: text)**
  - Adiciona a String enviada à Área de Transferência do Sistema Operacional.

- **planeObject(Object)**
  - Retorna o Objeto passado por um JSON.stringfy/parse removendo sua referencia e prototypes do objeto original.

- **getYoutubeId(String: URL)**
  - Retorna o ID do video de uma URL do YouTube através de uma regex aceita maioria dos formatos de URL.

- **getCurrentURI()**
  - Retorna a URL atual da página no Navegador incluindo a porta se for "localhost".

- **getCurrentURI()**
  - Retorna a URL atual da página no Navegador incluindo a porta se for "localhost".

- **getUrlParam(String: param)**
  - Retorna o valor de um parrametro Query String presente na URL.

- **slugify(String: text)**
  - Retorna uma strin no formato kebabCase removendo todos os acentos (Ex.: "Olá mundo" =>  "ola-mundo"). Muito util para ser usada de na criação de IDs e SEO-Friendly URLs.

## TODO
- Create a exmple/doc page for developments test proposes.
- Better date check rule.
