import { useState } from "react";
import { Formik, Form, Field } from "formik"

import styled from "@emotion/styled"

const Header = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 22px;
  box-shadow: 1px 2px 5px rgb(0,0,0, .2);
  position: relative;
  z-index: 2;

  input{
    outline: none;
    border: 1px solid #eee;
    padding: 10px 5px;
    border-radius: 5px;
  }
`
const ContainerPhotos = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;
`

const CenterPhotos = styled.div`
  column-count: 3;
  width: 1200px;
`
const Article = styled.article`
  display: inline-block;
  width: 370px;
  transition: box-shadow .2s ease;
  margin: 40px 10px 0 10px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: inherit;
    border-radius: 5px 5px 0 0;
  }

  p {
    margin: 10px 15px
  }

  :hover{
    box-shadow: 0 3px 5px rgb(0,0,0, .2);
  }
   

  
`
const App = () => {

  const [photos, setPhotos] = useState([])

  const open = url => {
    window.open(url)
  }

  console.log({ photos })
  return (
    <div>
      <Header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            // LLamaremos a una API (unplash.com)
            const URL = `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`
            const response = await fetch(URL, {
              headers: {
                'Authorization': 'Client-ID PBQ9p2o7wYdTd63NTmHYCzYbLiHPL7ye9XQSwuwUrSs'
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik >
      </Header>

      <ContainerPhotos>
        <CenterPhotos>
          {photos.map(photo => (
            <Article
              key={photo.id}
              onClick={() => open(photo.links.html)}
            >
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </Article>
          ))}
        </CenterPhotos>
      </ContainerPhotos>
    </div>
  )
}

export default App
