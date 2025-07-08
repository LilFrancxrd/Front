import { NavLink } from "react-router-dom";


export default function DashBoard(){

    return(

        <>
            <div className="content-wrapper">
                <section className="spacer bg-light">
                    <div className="container-fluid">
                        <div className="row justify-content-md-center">
                        {/* <!-- ============================================================== -->
                            SEDAN
                        <!-- ============================================================== --> */}
                            <div className="col-lg-4 col-md-9 d-flex align-items-stretch">
                                <div className="card p-2 me-1">
                                    <div className="card-body p-4 bg-dark">
                                    <div className="text-center">
                                        <h3 className="text-white font-weight-medium">SUV</h3>
                                    </div>  
                                        <div id="carouseSUV" className="carousel slide carousel-fade">
                                            <div className="carousel-inner" style={{height:'250px'}}>
                                                <div className="carousel-item active">
                                                    <img src="public\img\Audi a5 azul.png" className="img-fluid d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="public\img\BMW Serie 3 gris.png" className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="public\img\Kia Optima 2020.png" className="d-block w-100" alt="..."/>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouseSUV" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouseSUV" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>

                                    <div className="text-center mt-4">
                                        <a href="https://www.wrappixel.com/templates/materialm-free-bootstrap-admin/"
                                            className="btn btn-custom btn-primary ms-2" target="_blank">Ver Vehiculos</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ============================================================== -->
                                                 CAMIONETA
                            <!-- ============================================================== --> */}
                            <div className="col-lg-4 col-md-9 mt-0 mt-md-4 mt-lg-0 d-flex align-items-stretch">
                                <div className="card pro-demo p-2 ms-1">
                                    <div className="card-body p-4 bg-dark">
                                        <div className="text-center">
                                            <h3 className="text-white font-weight-medium">
                                            SEDAN 
                                            </h3>
                                        </div>
                                        <div id="carouseSedan" className="carousel slide carousel-fade">
                                            <div className="carousel-inner" style={{height:'250px'}}>
                                                <div className="carousel-item active">
                                                    <img src="public\img\Audi a5 azul.png" className="img-fluid d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="public\img\BMW Serie 3 gris.png" className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="public\img\Kia Optima 2020.png" className="d-block w-100" alt="..."/>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouseSedan" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouseSedan" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div className="text-center mt-4">
                                            <NavLink to='/Vehiculos'
                                            className="btn btn-custom btn-primary ms-2" target="_blank">Ver Vehiculos</NavLink>
                                        </div>
                                        <div className="bg-dark text-white">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus dicta asperiores quam inventore similique consequuntur est debitis laboriosam, illo magni aliquid molestias unde, cum, officiis repellendus deleniti pariatur alias?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //SUV */}
                            <div className="col-lg-4 col-md-9 mt-0 mt-md-4 mt-lg-0 d-flex ">
                                <div className="card pro-demo p-2 ms-1">
                                    <div className="card-body p-4 bg-dark">
                                        <div className="text-center">
                                            <h3 className="text-white font-weight-medium">
                                            CAMIONETAS
                                            </h3>
                                        </div>
                                            <div id="carouseCamioneta" className="carousel slide carousel-fade">
                                            <div className="carousel-inner" style={{height:'250px'}}>
                                                <div className="carousel-item active">
                                                    <img src="public\img\Audi a5 azul.png" className="img-fluid d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="public\img\BMW Serie 3 gris.png" className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="public\img\Kia Optima 2020.png" className="d-block w-100" alt="..."/>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouseCamioneta" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouseCamioneta" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div className="text-center mt-4">

                                            <a href="https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=33"
                                                className="btn btn-custom btn-primary ms-2" target="_blank">Ver Vehiculos</a>
                                        </div>
                                            <div className="bg-dark text-white">
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam blanditiis, suscipit et eveniet neque quasi cupiditate, sit fugit fugiat molestiae quaerat quam hic voluptatibus dolorem soluta inventore debitis cumque sapiente?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </>
    )
}



