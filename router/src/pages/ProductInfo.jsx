import { useParams } from "react-router-dom"

const ProductInfo = () => {
    //url 파라미터에서 id값을 추출
    const { id } = useParams() 
    const { name } = useParams() 

    return(
        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
            <p>상품명: {name}</p>
        </section>
    )
}

export default ProductInfo