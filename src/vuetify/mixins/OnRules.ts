import { Component, Vue } from 'nuxt-property-decorator'
import { checkCnpj, checkCpf } from '../../utils'

const minLenght = (min:number, msg:string) => (v :string) => (
  (v && v.toString().length >= min) || msg
)

const maxLenght = (max:number, msg:string) => (v :string) => (
  (v && v.toString().length <= max) || msg
)

@Component({})
export default class OnRules extends Vue {
  get rules () {
    return {
      required: (v :string) => !!v || 'Campo obrigatório',
      array: (v :any[]) => (v && v.length > 0) || 'Campo obrigatório',
      object: (v :any) => (Object.keys(v).length > 0) || 'Campo obrigatório',
      // TODO Better date check yyyy-mm-dd
      date: (v :string) => (v && v.length === 10) || 'Campo obrigatório',
      email: (v :string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail deve ser válido',
      min6: minLenght(6, 'Ao menos 6 caracteres.'),
      minLenght,
      maxLenght,
      id: (v :string) => {
        return /^[0-9a-z-]+$/.test(v) || 'Apenas letras minúsculas, numeros e hifens são permitidos'
      },
      cpf: (v :string) => checkCpf(v) || 'CPF inválido.',
      cnpj: (v :string) => checkCnpj(v) || 'CNPJ inválido.',
      cpfOrCnpj: (v :string) => checkCpf(v) || checkCnpj(v) || 'CPF ou CNPJ inválido.',
    }
  }
}
