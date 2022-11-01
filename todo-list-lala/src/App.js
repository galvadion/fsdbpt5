import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route} from "react-router-dom"
import TaskList from './components/task-list';
import Form from './components/form';

function App() {


  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}/>
          { 
            /* 
              Las rutas, generalmente se define por url: host /ubicación/ (task) más parametros
              en este caso id (señalizado por el :id)
            */
          }
          <Route path="/task/:id" element={<Form />}/>
        </Routes>
      </BrowserRouter>

      
        
    </main>
  );
}

/*
  - Editar elemento
  - Validar entrada :check:
  - Borrar elemento 
  - borrar lista completa :check:
  - Mover tarea
  - Si esta repetida que no la agregue :check:
  - Borrar entrada una vez pronto :check:
*/

export default App;
