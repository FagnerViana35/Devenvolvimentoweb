import Descricao from 'pages/Cardapio/Descricao';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cardapio from './pages/Cardapio';

const App = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/detalhes/:id" element={<Descricao />}/> 
                <Route path="/" element={<Cardapio />} />
                
            </Routes>
        </Router>
    )
}

export default App;