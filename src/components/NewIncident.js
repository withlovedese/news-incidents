import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const NewIncident = ({ news, setNews }) => {

  const navigate = useNavigate()

  const id = Math.floor((Math.random() * 1000) + 1)
  const [incident, setIncident] = useState({
    id: id
  });


  const handleChange = (e) => {
    console.log(e.target.name)
    setIncident ({
        ...incident,
        [e.target.name]: e.target.value
    });
  };

  //add news
  const submitIncident = async () => {
    const res = await fetch('https://news-incidents.herokuapp.com/news/' ,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(incident)
    })
    const data = await res.json()
    setNews([...news, data])
    navigate('/')
  }

  return (
    <IncidentForm>

      <Container>
        <label htmlFor="Title">Title</label>
        <IncidentTitle onChange={handleChange} name="name"/>
      </Container>
      
      <Container>
        <label htmlFor="Description">Description</label>
        <IncidentDescription onChange={handleChange} name='description'/>
      </Container>
      
      <Container>
        <label htmlFor="ImageUrl">Image url</label>
        <IncidentImgUrl onChange={handleChange} name='imageurl'/>
      </Container>
      
      <Container>
        <label htmlFor="Location">Location</label>
        <IncidentLocation onChange={handleChange} name="location"/>
      </Container>
      
      <Container>
        <label htmlFor="Category">Category</label>
        <IncidentCategory onChange={handleChange} name="category">
            <option value="Entertainment">Entertainment</option>
            <option value="Accident">Accident</option>
            <option value="Political">Political</option>
            <option value="Sports">Sports</option>
            <option value="Misc.">Misc.</option>
        </IncidentCategory>
      </Container>
      

      <SubmitIncident onClick={submitIncident}>Submit</SubmitIncident>

    </IncidentForm>
  )
}

const IncidentForm = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #bfe9ff;
  border: 1px solid royalblue;
  padding: 30px 50px;
  margin: 30px 20px;
  border-radius: 10px;
  
`
const Container = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
`
const IncidentTitle = styled.input`
  width: 100%;
  margin-left: auto;
  border: 1px solid royalblue;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 12px 20px;
  
`
const IncidentDescription = styled.input`

  width: 100%;
  margin-left: auto;
  border: 1px solid royalblue;
  border-radius: 5px;
  font-size: 1.2rem; 
  padding: 12px 20px;
  padding: 12px 20px;
  
`
const IncidentLocation = styled.input`
  width: 100%;
  margin-left: auto;
  border: 1px solid royalblue;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 12px 20px;
  
`
const IncidentCategory = styled.select`
  width: 100%;
  margin-left: auto;
  border: 1px solid royalblue;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 12px 20px;
`
const IncidentImgUrl = styled.input`
  width: 100%;
  margin-left: auto;
  border: 1px solid royalblue;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 12px 20px;
`
const SubmitIncident = styled.button`

  background-color: #0047ab;
  border-radius: 10px;
  padding: 10px 20px;
  width: fit-content;
  color: white;
  border: none;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  font-size: 1.3rem;
  
`


export default NewIncident