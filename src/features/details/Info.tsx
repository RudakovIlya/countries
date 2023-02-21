import styled from 'styled-components'
import { memo } from 'react'
import { DetailsResponseType } from './types'
import { useInfo } from './use-info'
import { useAppSelector } from '../../app/hooks'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`
const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoTitle = styled.h1`
  margin: 0 0 22px 0;
  font-weight: var(--fw-normal);
  font-size: 32px;
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`

interface InfoType {
  push: (to: string) => void
}

export const Info = memo((props: DetailsResponseType & InfoType) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain = [],
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props

  useInfo(borders)

  const { status, neighbors } = useAppSelector((state) => state.details)

  return (
    <Wrapper>
      {status === 'loading' ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <InfoImage src={flag} alt={name} />
          <div>
            <InfoTitle>{name}</InfoTitle>
            <ListGroup>
              <List>
                <ListItem>
                  <b>Native Name:</b> {nativeName}
                </ListItem>
                <ListItem>
                  <b>Population:</b> {population}
                </ListItem>
                <ListItem>
                  <b>Region:</b> {region}
                </ListItem>
                <ListItem>
                  <b>Sub Region:</b> {subregion}
                </ListItem>
                <ListItem>
                  <b>Capital:</b> {capital}
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <b>Top Level Domain:</b>{' '}
                  {topLevelDomain.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </ListItem>
                <ListItem>
                  <b>Currency:</b>{' '}
                  {currencies.map((c) => (
                    <span key={c.code}>{c.name} </span>
                  ))}
                </ListItem>
                <ListItem>
                  <b>Languages:</b>{' '}
                  {languages.map((l) => (
                    <span key={l.name}>{l.name}&nbsp;</span>
                  ))}
                </ListItem>
              </List>
            </ListGroup>
            <Meta>
              <b>Border Countries:</b>
              {!borders.length ? (
                <span>There is no border countries</span>
              ) : (
                <TagGroup>
                  {neighbors.map((b: any) => (
                    <Tag key={b} onClick={() => push(`/country/${b}`)}>
                      {b}
                    </Tag>
                  ))}
                </TagGroup>
              )}
            </Meta>
          </div>
        </>
      )}
    </Wrapper>
  )
})
