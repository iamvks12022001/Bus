import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';




const SearchBox = () => {
    return (
        <div>
            <div className="container md-3 my-5">
                <div className="row">
                    <div className="col">

                    </div>

                    <div className="col searchBox">
                        <InputGroup>
                            <Input placeholder="Enter Bus Number"> </Input>
                        </InputGroup>
                    </div>

                    <div className="col">
                        <input class="btn btn-primary submit" type="submit" value="Submit" style={{width:"150px"}}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}


const AlternateBox = () => {
    return (
        <>
            <div className="container">
                <form className="text-center row justify-content-center">
                    <h2 className="h3 mb-3 fw-normal w-50">Enter Bus Number</h2>
                    <div className="form-floating col align-self-center w-20">
                        <input type="text" className="form-control" id="busNo" name="busNo" placeholder="Bus Number" />
                    </div>
                    <div className="row justify-content-center">
                        <button className="col align-self-center btn btn-primary" type="submit">Submit</button>
                    </div>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </div>
        </>
    )
}



export default SearchBox;