import "./newRow.css"
const NewsRow=({newsData })=>{  
    return(       
        <>
            <div className="contenier-fluid">
                <div className="row1 mx-auto justify-content-start align-item-center ">
                        <div className="col-2 col1 my-4 mx-3 text-danger ">
                                    TOP NEWS  FROM INDIA
                        </div>
                        <div className="row mt-3  mx-auto row4 ">
                            {newsData .map((newsItem, index) => (
                                <div key={index} className="col-2 card m-3 cart1 ">
                                    <img src={newsItem.Image} alt={newsItem.title} className="img-fluid" />
                                    <div className="col-12 col_3 mt-3 ">
                                        <h5>{newsItem.title}</h5>
                                    </div>    
                                    <div className="col-12 col_2 ">    
                                        <p>{newsItem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                <div className='row border border-black '></div>        
            </div>
        </>      
    )
}
export default NewsRow;