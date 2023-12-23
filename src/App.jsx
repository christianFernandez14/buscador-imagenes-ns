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

  return (
    <div>
      <Header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            // LLamaremos a una API (unplash.com)
            console.log(values)
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
