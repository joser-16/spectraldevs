import React, { Fragment } from 'react'
import Item from './Item'
import PlanCardStyles from './styles';
import Button from '../Buttons';
import { CONTACT } from '../../constants/routes';
import useDiscount from '../../hooks/useDiscount';
import applyDiscount from '../../helpers/discount';

export default function PlanCard({ id, title, price, details, important, items, order, url, alt}) {

    const { styles, className } = PlanCardStyles(order),
        { discountEnable, percentage } = useDiscount(),
        discount = applyDiscount(price, percentage)


    return(
        <Fragment>
        <div  className={`${className} plan plan-order`}>
            <div className={`${className} plan-border-top ${important ? `plan-border-special` : `plan-border-normal`}`}></div>
                <div className={`${className} plan-container`}>
                    <p className={`${className} plan-title`}>{title}</p>

                    <p className={`${className} plan-price ${important ? `plan-price-special` : `plan-price-normal`}`}>
                        <span className={className}>USD</span> ${discount} {discountEnable && <span className={`${className} plan-percentage`}>OFF {percentage}%</span>}
                    </p>

                    { discountEnable &&
                        <p className={`${className} plan-offer`}>
                            <del>USD ${price}</del>
                        </p>
                    }

                    <Button
                        variant={`${important ? `gradient` : `ghost-dark`}`}
                        linkTo={CONTACT}
                        className={`${className} btn-block w-100`}
                        size='md'
                    >Contratar</Button>
                </div>

                <div className={`${className} plan-details`}>
                    <p>{details}</p>
                </div>

                <div className={`${className} plan-container`}>
                    {items.map( (item, index) => (
                        <Item
                            key={`${id}${index}`}
                            url={url}
                            alt={alt}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            {styles}
        </Fragment>
    )
}