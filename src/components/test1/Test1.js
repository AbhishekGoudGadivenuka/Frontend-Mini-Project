//create test1 component
import './Test1.css'
import Test4 from '../test4/Test4'
function Test1() {
    return (
        <div className="test1-div">
            <h1>Test component A</h1>
            <Test4 />
        </div>
    )
}



export default Test1;