import {lazy, Suspense} from 'react'
import Component1 from "./Component1";
// const Component1 = lazy(() => import('./Component1'))

const LazyComponent = () => {
    return (
        <>
            <h1>Lazy</h1>
            <Suspense fallback={''}>
                <Component1 />
                <img src="/img/img.jpg" alt=""/>
            </Suspense>
        </>
    )
}

export default LazyComponent