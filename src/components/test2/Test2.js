import './Test2.css'
import Test5 from '../test5/Test5'
import Test6 from '../test6/Test6'
function Test2() {


    return (
        <div className='test2-div'>
            <h1>
                Test component B
            </h1>
            <Test5 />
            <Test6 />
        </div>
    )
}

export default Test2;