import './styles.css';


function Third(){
    return (
        <>
        <div class="container mt-5 p-5">
            <label className="col-6">First Name</label>
            <label className="col-6">Last Name</label>
            <input className="col-5 box ml-3" type="text" id="name" name="name" required></input>
            <input className="col-5" type="text" id="name" name="name" required></input>
            <label class="col-12 mt-5">How should we contact you?</label>
            <div class="form-check form-check-inline">
                    <input class="form-check-input ml-3" type="radio" name="inlineRadioOptions" value="option1"></input>
                    <label class="form-check-label" for="inlineRadio1">Phone</label>
                  </div>
            <div class="form-check form-check-inline">
                    <input class="form-check-input ml-3" type="radio" name="inlineRadioOptions" value="option2"></input>
                    <label class="form-check-label" for="inlineRadio2">Email</label>
                  </div>

            </div>


            <div class="container my-5 p-5">
            <label className="col-6">First Name</label>
            <label className="col-6">Last Name</label>
            <input className="col-5 box ml-3" type="text" id="name" name="name" required></input>
            <input className="col-5" type="text" id="name" name="name" required></input>
            <label className="col-6 mt-5">How should we contact you?</label>
            <label className="col-6">Email Address</label>
            <div class="form-check form-check-inline">
                    <input class="form-check-input ml-3" type="radio" name="inlineRadioOptions" value="option1"></input>
                    <label class="form-check-label" for="inlineRadio1">Phone</label>
                  </div>
            <div class="form-check form-check-inline">
                    <input class="form-check-input ml-3" type="radio" name="inlineRadioOptions" value="option2"></input>
                    <label class="form-check-label" for="inlineRadio2">Email</label>
                  </div>
                <input className="col-5 rox" type="text" id="name" name="name" required></input>
            </div>
        
        </>
    )
}


export default Third;


