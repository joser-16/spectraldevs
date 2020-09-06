import React, { Fragment } from 'react'
import Button from '../Buttons'
import style from './styles'
import Container from '../Container'
import Alert from '../Alert'
import useContactForm from '../../hooks/useContactForm'
import useDiscount from '../../hooks/useDiscount'
import applyDiscount from '../../helpers/discount'

export default function ContactForm() {

    const [formData, status, loading, onChange, sendEmail, plans ] = useContactForm(),
        { percentage } = useDiscount()

    return (
        <Fragment>
            <form 
                onSubmit={sendEmail}
            >
                <div className="form-container">
                    <div className="form-content">
                        <Container>
                            { status === 'SUCCESS' 
                                && <Alert message="El correo se ha enviado correctamente" />
                            }

                            <h2>Escribe todos los detalles de tu proyecto en el siguiente formulario</h2>
                            <div className="form-group">
                                <div className="form-component">
                                    <label htmlFor="name">Nombre completo <span>*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-component">
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-component">
                                <label htmlFor="plan">¿Qué plan estás buscando? <span>*</span></label>
                                <select
                                    id="plan"
                                    name="plan"
                                    defaultValue={formData.plan}
                                    onBlur={onChange}
                                >
                                    {plans.map( plan => {
                                        const discount = applyDiscount(plan.price, percentage)

                                        return(
                                            <option
                                                key={plan.id}
                                                value={`Plan ${plan.title} (USD $${discount})`}>
                                                {`Plan ${plan.title} (USD $${discount})`}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-component">
                                <label htmlFor="message">Detalles del proyecto <span>*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={onChange}
                                ></textarea>
                            </div>

                            <input 
                                type="hidden"
                                name="discount"
                                value={formData.discount}
                            />

                            <Button
                                type="submit"
                                size="md"
                                className={`btn-block w-100 ${loading && 'btn-disabled'}`}
                            >{loading ? '...Enviando' : 'Enviar'}
                            </Button>
                        </Container>
                    </div>
                </div>
            </form>
            <style jsx>{style}</style>
        </Fragment>
    )
}