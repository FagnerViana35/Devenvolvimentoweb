import Leiloeiro from '@/views/Leiloeiro'
import { mount } from '@vue/test-utils'
import { getLeilao, getLances } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')
const leilao = {
    produto: 'Livro da casa do código',
    lancesInicial: 50,
    descricao: 'Livro bem bacana sobre Vue'
}

const lances = [
    {
        id: 1,
        valor: 1001,
        data: '2021-12-01',
        leilao_id: 1
    },
    {
        id: 2,
        valor: 1003,
        data: '2021-12-01',
        leilao_id: 1
    },
    {
        id: 3,
        valor: 1099,
        data: '2021-12-01',
        leilao_id: 1
    }
]
describe('Leiloeiro inicia o leilão e não possui lance', () => {
    test('avisa quando não existem lances', async () => {
        
        getLeilao.mockResolvedValueOnce()
        getLances.mockResolvedValueOnce([
           
        ])
        const wrapper = mount(Leiloeiro, {
            propsData: {
                id: 1
            }
        })
        await flushPromises()

        const alerta = wrapper.find('.alert-dark')
        
        expect(alerta.exists()).toBe(true)
    })
})

describe('Um leiloeiro exibe os lances existentes', () => {
    test('não mostra o aviso de "sem lances"', async () => {
        getLeilao.mockResolvedValueOnce(leilao)
        getLances.mockResolvedValueOnce(lances)
        const wrapper = mount(Leiloeiro, {
            propsData: {
                id: 1
            }
        })
        await flushPromises()
        const alerta = wrapper.find('.alert-dark')
        expect(alerta.exists()).toBe(false)
    })

    test('Possui um lista de lances', async () => {
        getLeilao.mockResolvedValueOnce(leilao)
        getLances.mockResolvedValueOnce(lances)
        const wrapper = mount(Leiloeiro, {
            propsData: {
                id: 1
            }
        })
        await flushPromises()
        const alerta = wrapper.find('.list-inline')
        expect(alerta.exists()).toBe(true)

    })
})


describe('Um leiloeiro comunica um valor de menor e maior lance', () => {
    test('Mostra o maior lance daquele leilão', async () => {
        getLeilao.mockResolvedValueOnce(leilao)
        getLances.mockResolvedValueOnce(lances)
        const wrapper = mount(Leiloeiro, {
            propsData: {
                id: 1
            }
        })
        await flushPromises()
        const maiorLance = wrapper.find('.maior-lance')
        expect(maiorLance.element.textContent).toContain('Maior lance: R$ 1099' ) 
    })

    test('Mostra o menor lance daquele leilão', async () => {
        getLeilao.mockResolvedValueOnce(leilao)
        getLances.mockResolvedValueOnce(lances)
            const wrapper = mount(Leiloeiro, {
                propsData: {
                    id: 1
                }
            })
            await flushPromises()
            const menorLance = wrapper.find('.menor-lance')
            expect(menorLance.element.textContent).toContain('Menor lance: R$ 1001') 
    })
})
