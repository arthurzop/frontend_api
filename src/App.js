import GlobalStyle from "./styles/global";
import Form from "./components/form";
import Grid from "./components/grid"
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 880px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try{
      const res = await axios.get("https://localhost:8800")
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))

    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])
   
  return (
    <>
      <Container>
          <Title>Usuarios</Title>
          <Form/>
          <Grid users={users}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
