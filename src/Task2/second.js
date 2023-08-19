import './styles.css';

function second () {
    return (
        <>
        <div class="container mt-5 p-5">
            <label className="col-6">First Name</label>
            <label className="col-6">Last Name</label>
            <input className="col-5 box ml-3" type="text" id="name" name="name" required></input>
            <input className="col-5" type="text" id="name" name="name" required></input>
            <label class="col-12 mt-5">How should we contact you?</label>
                <select class="col-5 ml-3">
                    <option>Choose option</option>
                    <option>phone</option>
                    <option>Email</option>
                </select>
            </div>


            <div class="container my-5 p-5">
            <label className="col-6">First Name</label>
            <label className="col-6">Last Name</label>
            <input className="col-5 box ml-3" type="text" id="name" name="name" required></input>
            <input className="col-5" type="text" id="name" name="name" required></input>
            <label className="col-6 mt-5">How should we contact you?</label>
            <label className="col-6">Email Address</label>
                <select class="col-5 ml-3 box">
                    <option onclick="btn">Email</option>
                    
                </select>

                <input className="col-5" type="text" id="name" name="name" required></input>
            </div>
        
        </>
    )
}


export default second;