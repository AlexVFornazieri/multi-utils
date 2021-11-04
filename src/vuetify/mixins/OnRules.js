import { checkCnpj, checkCpf } from '../../utils'

const minLenght = (min, msg) => v => (
  (v && v.toString().length >= min) || msg
)

const maxLenght = (max, msg) => v => (
  (v && v.toString().length <= max) || msg
)

export default {
  computed: {
    rules () {
      return {
        required: v => !!v || 'Campo obrigatório',
        array: v => (v && v.length > 0) || 'Campo obrigatório',
        object: v => (Object.keys(v).length > 0) || 'Campo obrigatório',
        // TODO Better date check yyyy-mm-dd
        date: v => (v && v.length === 10) || 'Campo obrigatório',
        email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail deve ser válido',
        min6: minLenght(6, 'Ao menos 6 caracteres.'),
        minLenght,
        maxLenght,
        id: (v) => {
          return /^[0-9a-z-]+$/.test(v) || 'Apenas letras minúsculas, numeros e hifens são permitidos'
        },
        cpf: v => checkCpf(v) || 'CPF inválido.',
        cnpj: v => checkCnpj(v) || 'CNPJ inválido.',
        cpfOrCnpj: v => checkCpf(v) || checkCnpj(v) || 'CPF ou CNPJ inválido.',
      }
    },
  },
}
