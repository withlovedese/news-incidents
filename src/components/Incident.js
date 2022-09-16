import React from 'react'
import styled from 'styled-components'

const Incident = ({incident}) => {
  return (
    <IncidentContainer> 
        <div>
            <IncidentTitle>{incident.name}</IncidentTitle>
            <IncidentDescription>{incident.description}</IncidentDescription>
        </div>    
        
        <IncidentImage src={incident.imageurl} alt="" />
    </IncidentContainer>
  )
}

const IncidentContainer = styled.div`
    background-color: #bfe9ff;
    border-radius: 10px;
    margin: 30px 40px 30px 40px;
    padding: 30px;
    color: black;
    display: flex;
    justify-content: space-between;
`
const IncidentTitle = styled.h2`
    text-decoration: underline;
    font-weight: bolder;
    text-transform: uppercase;
    color: #004d78;
`
const IncidentDescription = styled.p`
    
`

const IncidentImage = styled.img`
    max-width: 300px;
    margin-right: 30px;
`

export default Incident