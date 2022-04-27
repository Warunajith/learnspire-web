import React from 'react'

export default function AuthenticationHeader() {


    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    return { Authorization: 'Bearer '+ user.token};


   
}
