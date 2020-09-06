import React from 'react'
import css from 'styled-jsx/css'
import { breakpoints, colors, others} from '../../styles/theme'

export default function PlanCardStyles(order = 1) {
    const styles = css.resolve`
        .plan {
            position: relative;
            background: ${colors.white};
            box-shadow: ${others.boxShadow};
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            text-align: center;
        }

        .plan-order {
            order: ${order};
        }

        .plan-border-top {
            position: absolute;
            top: 0;
            width: 100%;
            height: 5px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .plan-border-normal {
            background: ${colors.black};
        }

        .plan-border-special {
            background: ${others.primaryGradient};
        }

        .plan-container {
            padding: 2rem 1rem;
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
            .plan-container {
                padding: 2rem 4rem;
            }
        }

        .plan-title {
            font-size: 1.2em;
            font-weight: 700;
            color: ${colors.black};
        }

        .plan-price {
            font-size: 2em;
            font-weight: 700;
        }

        .plan-price span {
            font-weight: 400;
        }

        .plan-price .plan-percentage {
            font-size: .6em;
            font-weight: 400;
            color: green;
        }

        .plan-details {
            padding: 1rem 0;
            width: 100%;
            text-align: center;
            background: ${colors.secondaryWhite};
        }

        .plan-price-normal {
            color: ${colors.black};
        }

        .plan-price-special {
            color: ${colors.blue};
        }

        .plan-offer {
            color: #444;
            font-size: 1.2em;
        }
    `
    return (styles)
}