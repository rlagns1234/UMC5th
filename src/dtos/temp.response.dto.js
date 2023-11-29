export const userResponseDTO = (rows) => {
    const result = [];
    
    for (let i = 0; i < rows.length; i++) {
        const element = rows[i];
        result.push({
            "Id": element.id, 
            "Name": element.name, 
            "Gender": (element.gender == 0 ? "남" : "여"), 
            "Address": element.address, 
            "ProfileImg": element.profileImg, 
            "PhoneNumber": element.phoneNumber, 
            "Email": element.eMail, 
            "Point": element.points, 
            "createdAt": element.created_at, 
            "updatedAt": element.updated_at});
    }
    
    return result;
}

export const tempResponseDTO = (data) => {
    return {"testString" : data};
}

export const flagResponseDTO = (flag) => {
    return {"flag" : flag};
}