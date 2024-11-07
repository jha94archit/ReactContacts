import { Formik, ErrorMessage, Form, Field } from "formik"
import { Button } from "@chakra-ui/react"

export default function LoginForm() {
    const initialValues = {
        username: '',
        password: ''
    }

    const validate = (values) => {
        const errors = {}

        if(!values.username) {
            errors.username = 'Username is required'
        }

        if(!values.password) {
            errors.password = 'Password is required'
        }

        return errors
    }

    const handleSubmit = (values) => {
        alert(`User ${values.username} successfully logged in`)
    }

    return (
        <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="username">
                        <h2>Username</h2>
                        <Field type="text" id="username" name="username" />
                        <ErrorMessage name="username" component="div" />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        <h2>Password</h2>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </label>
                </div>
                <div>
                    <Button type="submit">Login</Button>
                </div>
            </Form>

        </Formik>
    )
}