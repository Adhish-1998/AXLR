import './Customer.css'
import Like from './Likes/Like'
import Insta from './Insta/Insta'

const Customer = () =>{
    return (
        <div className="Customer">
            <h3>Customer Blog</h3>
            <Like />
            <Insta />
        </div>
    )
}

export default Customer