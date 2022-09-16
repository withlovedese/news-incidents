import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const addIncident = () =>{
      navigate("/addIncident")
    }
  return (
    <Nav>
        <Title>
            News Incidents
        </Title>
        { location.pathname === '/' ? (
            <AddIncident onClick={addIncident}>
            Add New Incident
            </AddIncident>
        ): (
            <>
            </>
        )}
        
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    color: #004d78;
    background-color: #bfe9ff;
    padding: 20px;
`

const Title = styled.div`
    font-size: 1.5rem;
`

const AddIncident = styled.button`
    border-radius: 5px;
    background-color: white;
    color: #004d78;
    border: none;
    padding: 10px 12px 10px 12px;
    cursor: pointer;
    
`

export default Header