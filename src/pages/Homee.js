import "./homee.css"

const Home = () => {
    return (
         <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left-child text-white">
                        <h2>Digital Agency</h2>
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
                        <button className="btn home-btn">explore</button>
                        <button className="btn home-btn">get a quote</button>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 right-child text-white">

                        <h2>cat</h2>
                        <hr />
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
                                <img src="/images/download.jfif" alt="" />
                                <h3>burger</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
                                    <img src="/images/download.jfif" alt="" />
                                    <h3>burger</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
                                        <img src="/images/download.jfif" alt="" />
                                        <h3>burger</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
                                            <img src="/images/download.jfif" alt="" />
                                            <h3>burger</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
                                                <img src="/images/download.jfif" alt="" />
                                                <h3>burger</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
               </div>   
            </div>
            </>
 )
         
}

export default Home