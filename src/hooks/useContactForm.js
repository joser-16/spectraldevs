import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import applyDiscount from "../helpers/discount"
import useDiscount from "./useDiscount"

export default function useContactForm() {

    const { allDatoCmsPlan } = useStaticQuery(graphql`
        query {
            allDatoCmsPlan {
                nodes {
                    id
                    title
                    price
                }
            }
        }
    `)

    
    const firstPlan = allDatoCmsPlan.nodes[0]

    const { discountEnable, percentage } = useDiscount()

    const discount = applyDiscount(firstPlan.price, percentage)

    const [plans] = useState(allDatoCmsPlan.nodes)
    const [status, setStatus] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        plan: `Plan ${firstPlan.title} (USD $${discount})`,
        message: '',
        discount: discountEnable ? `Se ha aplicado un descuento del ${percentage}%` : 'No se ha aplicado ningún descuento'
    })
    const [loading, setLoading] = useState(null)

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const sendEmail = async(e) => {
        e.preventDefault()

        setLoading(true)
    
        const data = await fetch('https://formspree.io/myynqjaa', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const status = data.status !== 200 ? 'ERROR' : 'SUCCESS'
        setStatus(status)
        resetForm()
        setLoading(null)
    }

    const resetForm = () => setFormData({
        name: '',
        email: '',
        plan: `Plan ${firstPlan.title} (USD $${discount})`,
        message: ''
    })

    return [ formData, status, loading, onChange, sendEmail, plans ]
}