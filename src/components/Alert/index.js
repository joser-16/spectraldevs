import React, { Fragment } from 'react'
import style from './styles'

export default function Alert({ type, message }) {
    return(
        <Fragment>
            <div className="check-message">
                <svg viewBox="0 0 26 26" fill="none" className="check-icon" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M13 0.5C6.09643 0.5 0.5 6.09643 0.5 13C0.5 19.9035 6.09643 25.4999 13 25.4999C19.9035 25.4999 25.4999 19.9035 25.4999 13C25.4926 6.09952 19.9005 0.507377 13 0.5ZM13 23.7143C7.08264 23.7143 2.2857 18.9173 2.2857 13C2.2857 7.08264 7.08264 2.2857 13 2.2857C18.9173 2.2857 23.7143 7.08264 23.7143 13C23.7079 18.9147 18.9147 23.7079 13 23.7143Z" fill="#5A5A5A"/>
                        <path d="M19.8592 7.90445C19.5132 7.57026 18.9647 7.57026 18.6187 7.90445L10.3214 16.2017L7.38119 13.2615C7.03862 12.9068 6.47335 12.897 6.1187 13.2396C5.764 13.5822 5.75422 14.1474 6.09678 14.5021C6.10395 14.5095 6.11127 14.5168 6.1187 14.524L9.69014 18.0955C10.0388 18.444 10.604 18.444 10.9526 18.0955L19.8812 9.16688C20.2238 8.81224 20.2139 8.24702 19.8592 7.90445Z" fill="#5A5A5A"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="25" height="25" fill="white" transform="translate(0.5 0.5)"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>{message}</p>
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}