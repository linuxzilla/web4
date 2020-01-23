function ageValidator(string) {
    const splitted = string.split("-");
    const dataNow = new Date();
    if (dataNow.getFullYear() < parseInt(splitted[0]) || parseInt(splitted[0]) < 1900) {
        return false
    }
    if (dataNow.getFullYear() === parseInt(splitted[0]) && dataNow.getMonth() + 1 < parseInt(splitted[1])) {
        return false
    }
    if (dataNow.getDate() <= parseInt(splitted[2])) {
        return false
    }
    return true
}

export default ageValidator