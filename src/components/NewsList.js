import React from 'react'
import Incident from './Incident'
import styled from 'styled-components'

const NewsList = ({news}) => {
  return (
    <div>
      <NewsCategory>Entertainment</NewsCategory>
        { news.filter((incident) => incident.category === 'Entertainment').length > 0 ?
        (news.filter((incident) => incident.category === 'Entertainment')
        .map((incident) => (
            <Incident key={incident.id} incident={incident}></Incident>
        ))) : ("There is no entertainment news")
        }
      <NewsCategory>Political</NewsCategory>
      { news.filter((incident) => incident.category === 'Political').length > 0 ?
        (news.filter((incident) => incident.category === 'Political')
        .map((incident) => (
            <Incident key={incident.id} incident={incident}></Incident>
        ))) : ("There is no political news")
        }
      <NewsCategory>Accident</NewsCategory>
      { news.filter((incident) => incident.category === 'Accident').length > 0 ?
        (news.filter((incident) => incident.category === 'Accident')
        .map((incident) => (
            <Incident key={incident.id} incident={incident}></Incident>
        ))) : ("There is no Accident news")
        }
      <NewsCategory>Sports</NewsCategory>
      { news.filter((incident) => incident.category === 'Sports').length > 0 ?
        (news.filter((incident) => incident.category === 'Sports')
        .map((incident) => (
            <Incident key={incident.id} incident={incident}></Incident>
        ))) : ("There is no Sports news")
        }
      <NewsCategory>Miscellaneous</NewsCategory>
      { news.filter((incident) => incident.category === 'Misc.').length > 0 ?
        (news.filter((incident) => incident.category === 'Misc.')
        .map((incident) => (
            <Incident key={incident.id} incident={incident}></Incident>
        ))) : ("There is no Miscellaneous news")
        }
    </div>
  )
}

const NewsCategory = styled.h1`
  color: white;
  text-decoration: underline;
  text-transform: capitalize;
  margin-left: 20px;
`

export default NewsList