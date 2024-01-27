import "./homepage.css";
const Homepage=()=>{
    return(
        <>
            <div className="container-fluid ">
                <div className="row justify-content-center align-item-center ">
                    <div className="col-6 my-4 ">
                        <img src="NewsAPI.png"/>
                        <img src="logo.png"/>
                        <img className="pt-2"src="logo1.png"/> 
                    </div>
                </div>
                <div className='row border border-black '></div> 
                <div className='row border border-black mt-1'></div> 
                <div className="row justify-content-center align-item-center  ">
                        <div className="col-2 my-5 box3 ">
                            <form class="d-flex" role="search">    
                                <div className=" col border  pt-2 box1 ">
                                
                                    <span class="DocSearch-Button-Container">
                                        <img src="logo3.png"/>
                                        <span class="DocSearch-Button-Placeholder">Search</span>
                                    </span>
                                    <input className="border-0  " type="search"/>
                                </div>
                                    <button class="btn bg-danger text-light py-2 border-0" type="submit">
                                                Go
                                    </button>      
                            </form>     
                        </div>
                </div>
                {/* <div className="row row3">
                </div>        */}
                <div className="row1 mx-auto justify-content-start align-item-center ">
                    <div className="col-2 col1 my-4  text-danger ">
                                TOP NEWS  FROM INDIA
                    </div>
                    <div className="row mt-3  mx-auto row4 ">
                        <div className="col-3 card m-3 cart1 border"></div>
                        <div className="col-3 card m-3 cart1 border"></div>
                        <div className="col-3 card m-3 cart1 border"></div>
                    </div>
                    <div className="row mt-3  mx-auto row4 ">
                        <div className="col-3 card m-3 cart1 border"></div>
                        <div className="col-3 card m-3 cart1 border"></div>
                        <div className="col-3 card m-3 cart1 border"></div>
                    </div>
                    <div className="row mt-3  mx-auto row4 ">
                        <div className="col-3 card m-3 cart1 border"></div>
                        <div className="col-3 card m-3 cart1 border"></div>
                        <div className="col-3 card m-3 cart1 border"></div>
                    </div>
                </div>
                <div className='row border border-black '></div> 

               

            </div>
        </>
    )
}
export default Homepage;