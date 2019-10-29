import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner'

const WithSpiner = WrappedComponent =>  ({ isLoading, ...otherProps}) => {
    return isLoading ?
    (
       <SpinnerContainer>
           <SpinnerOverlay />
       </SpinnerContainer>
    )
    :
    <WrappedComponent { ...otherProps } />
}

export default WithSpiner;
