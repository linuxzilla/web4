import React, {Component} from "react"
import ageValidator from "./ageValidator";
import Input from "./elements/input";
import Skills from "./elements/skills";
import Agree from "./elements/agree";
import Output from "./elements/output";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameIsValid: false,
            gender: "",
            genderIsValid: false,
            birthDate: "",
            birthDateIsValid: false,
            phone: "",
            phoneIsValid: false,
            email: "",
            emailIsValid: false,
            education: "",
            educationIsValid: false,
            skills: [],
            about: "",
            aboutIsValid: false,
            isAgree: null,
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.send = this.send.bind(this);
    }


    onChangeValue = event => {
        this.setState({value: event.target.value});
    };

    //[!@#$%^&*(),.?":{}|<>]

    handleChange(event) {
        const {name, value} = event.target;
        switch (name) {
            case "name":
                if (value === "") {
                    this.setState({nameIsValid: false})
                } else {
                    if (!(/[!@#$%^&*(),.?":{}|<>]/.test(value.toString()))) {
                        this.setState({name: value, nameIsValid: true})
                    } else {
                        this.setState({nameIsValid: false})
                    }
                }
                break;
            case "gender":
                if (value === "") {
                    this.setState({genderIsValid: false})
                } else {
                    this.setState({gender: value, genderIsValid: true})
                }
                break;
            case "birthDate":
                if (value === "") {
                    this.setState({birthDateIsValid: false})
                } else {
                    if (ageValidator(value)) {
                        this.setState({birthDate: value, birthDateIsValid: true})
                    } else {
                        this.setState({birthDateIsValid: false})
                    }
                }
                break;
            case "phone":
                if (value === "") {
                    this.setState({phoneIsValid: false})
                } else {
                    if (/^\+36(?:(?:(?:1|20|30|31|50|70)[1-9]\d{6})|[1-9]\d{7})$/.test(value.toString())) {
                        this.setState({phone: value, phoneIsValid: true})
                    } else {
                        this.setState({phoneIsValid: false})
                    }
                }
                break;
            case "email" :
                if (value === "") {
                    this.setState({emailIsValid: false})
                } else {
                    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value.toString())) {
                        this.setState({email: value, emailIsValid: true})
                    } else {
                        this.setState({emailIsValid: false})
                    }
                }
                break;
            case "education":
                if (value === "") {
                    this.setState({educationIsValid: false})
                } else {
                    this.setState({education: value, educationIsValid: true})
                }
                break;

            /*
        case "skills":
            if (value === ""){
                this.setState({skillsIsValid: false})
            }
            else{
                if (!(/[!@#$%^&*(),.?":{}|<>]/.test(value.toString()))){
                    this.setState({skills: value, skillsIsValid: true})
                }
                else {
                    this.setState({skillsIsValid: false})
                }
            }
            break;
             */

            case "about":
                if (value === "") {
                    this.setState({aboutIsValid: false})
                } else {
                    if (!(/[!@#$%^&*(),.?":{}|<>]/.test(value.toString()))) {
                        this.setState({about: value, aboutIsValid: true})
                    } else {
                        this.setState({aboutIsValid: false})
                    }
                }
                break;
            default:
                this.setState({[name]: value});
                break;
        }
    }

    onAddItem = () => {
        this.setState(state => {
            const list = state.skills.push(state.value);
            return {
                list,
                value: '',
            };
        });
    };

    onRemoveItem = i => {
        this.setState(state => {
            const skills = state.skills.filter((item, j) => i !== j);
            return {
                skills,
            };
        });
    };


    //not working
    send() {
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.name,
                gender: this.gender,
                birthDate: this.birthDate,
                phone: this.phone,
                email: this.email,
                education: this.email,
                skills: this.skills,
                about: this.about
            })
        })
        alert("Az önéletraj tobábbítva! köszönjük!")
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Adataidat itt adhatod meg:</legend>
                    <Input data={this.state} handleChange={this.handleChange}/>
                    <label>Jártaságaid:</label><br/>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.onChangeValue}
                        placeholder="Miben vagy jó ?"
                    /><br/>
                    <button
                        class="add"
                        type="button"
                        onClick={this.onAddItem}
                        disabled={!this.state.value}
                    >
                        Hozzáadás
                    </button>
                    <Skills data={this.state} onAddItem={this.onAddItem} onRemoveItem={this.onRemoveItem}/>
                </fieldset>
                <br/>
                <Agree data={this.state} handleChange={this.handleChange}/><br/>
                <Output data={this.state} send={this.send}/>
            </div>
        )
    }

}

export default Form