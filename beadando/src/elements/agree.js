import React from "react";

function Agree(props) {
    if (props.data.nameIsValid && props.data.genderIsValid && props.data.birthDateIsValid && props.data.emailIsValid && props.data.educationIsValid && props.data.aboutIsValid){
        return(
            <div>
                <fieldset>
                    <p>Hozzájárulok ahhoz, hogy a GYUR'MA Ipari, Kereskedelmi és Szolgáltató Kft. az adataimat
                        ezen célokból kezelje és tárolja:</p>
                    <label>
                    Elfogadom
                    <input
                        class="container"
                        name="isAgree"
                        type="checkbox"
                        checked={props.data.isAgree}
                        onChange={props.handleChange} />
                </label>
                </fieldset>
            </div>
        )
    }
    else {
        props.data.isAgree = false;
        return (
            <div>
                <fieldset>
                    <h2>Kérelek tölsd ki a <b>*</b>-al jelölt mezőket!</h2>
                    <p>Nem tünik el a <b>*</b> ? Biztos helyen adtad meg?</p>
                </fieldset>
            </div>
        )
    }
}
export default Agree