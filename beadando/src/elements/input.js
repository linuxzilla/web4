import React from "react";

function Input(props) {
    return (
        <form>
            <label>Név: </label>
            {
                props.data.nameIsValid === false &&
                <b>*</b>
            }<br/>
            <input
                type="text"
                name="name"
                onChange={props.handleChange}
                placeholder="A nevedet itt adhatod meg"
            /><br/>
            <label>Nem: </label>
            {
                props.data.genderIsValid === false &&
                <b>*</b>
            }<br/>
            <select
                value={props.data.gender}
                onChange={props.handleChange}
                name="gender"
            >
                <option/>
                <option value="male">Férfi</option>
                <option value="female">Nő</option>
                <option value="nobinary">Nem bináris</option>
            </select><br/>
            <label>Születési dátum:</label>
            {
                props.data.birthDateIsValid === false &&
                <span>*</span>
            }<br/>
            <input
                type="date"
                name="birthDate"
                onChange={props.handleChange}
            /><br/>
            <label>Telefonszám:</label>
            {
                props.data.phoneIsValid === false &&
                <b>*</b>
            }<br/>
            <input
                type="text"
                name="phone"
                onChange={props.handleChange}
            /><br/>
            <label>E-mail cím:</label>
            {
                props.data.emailIsValid === false &&
                <b>*</b>
            }<br/>
            <input
                type="email"
                name="email"
                onChange={props.handleChange}
            /><br/>
            <label>Végzetség:</label>
            {
                props.data.educationIsValid === false &&
                <b>*</b>
            }<br/>
            <select
                value={props.data.education}
                onChange={props.handleChange}
                name="education"
            >
                <option/>
                <option value="none">Nincs végzetségem</option>
                <option value="elementary">Általános iskola</option>
                <option value="worker_qualification">Szakmunkás képző</option>
                <option value="graduation">Éretségivel rendelkezem</option>
                <option value="diploma">Diplomával rendelkezem</option>
                <option value="master">Mester diplomával rendelkezem</option>
            </select><br/>
            <label>Pár szó magadól:</label>
            {
                props.data.aboutIsValid === false &&
                <b>*</b>
            }<br/>
            <textarea name="about" onChange={props.handleChange}/><br/>

        </form>
    )
}

export default Input