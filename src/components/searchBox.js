import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';




const SearchBox = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Track my Bus</p>
                </div>
                <div className="col">

                </div>
                <div className="col searchBox">
                <InputGroup>
        <Input placeholder ="Enter Bus Number"> </Input>
        <InputGroupAddon addonType="append" placeholder ="Enter Bus Number">
          <InputGroupText><button type="submit">search</button></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
                </div>
            </div>
        </div>
    
    {/* <AlternateBox/> */}
    </>
    )
}


const AlternateBox = ()=>{
    return (
        <>
            <div className = "container">
            <form className="text-center row justify-content-center">
                <h2 className="h3 mb-3 fw-normal w-50">Enter Bus Number</h2>
                <div className="form-floating col align-self-center w-20">
                    <input type="text" className="form-control" id="busNo" name="busNo" placeholder="Bus Number"/>
                </div>
                <div className = "row justify-content-center">
                <button className="col align-self-center btn btn-primary" type="submit">Submit</button>
                </div>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
            </div>
        </>
    )
}



export default SearchBox;