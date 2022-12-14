import Avaliador from '@/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')

const leiloes = [
    {
        produto: 'Livro da Casa do Codigo',
        lanceInicial: 50,
        descricao: 'Livro sobre VueJS'
    },
    {
        produtos: 'Livro da Casa do Código',
        lanceInicial: 50,
        descricao: 'Livro sobre Teste Unitário'
    }
]

describe('Um avaliador que se concta com a API', () => {
    test('mostra todos os leilões retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce(leiloes)
        const wrapper = mount(Avaliador, {
         stubs: {
            RouterLink: RouterLinkStub
        }   
        })
        
        await flushPromises()
        const totalleiloesExibidos = wrapper.findAll('.leilao').length
        expect(totalleiloesExibidos).toBe(leiloes.length)
     })

     test('Não a leilões retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce([])
        const wrapper = mount(Avaliador, {
         stubs: {
            RouterLink: RouterLinkStub
        }   
        })
        
        await flushPromises()
        const totalleiloesExibidos = wrapper.findAll('.leilao').length
        expect(totalleiloesExibidos).toBe(0)
     })
    })