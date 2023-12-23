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
const App = () => {

  const [photos, setPhotos] = useState([])

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
    </div>
  )
}

export default App
