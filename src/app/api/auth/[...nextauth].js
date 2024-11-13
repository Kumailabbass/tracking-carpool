import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions = {
    providers:[
        GitHub({
            clientId:'Ov23li6D59Y5a80spCGA',
            clientSecret:'dfd62ab3e1a659a03b46c8f9efe853882efd2af6'
        }) 
    ]
}

export default NextAuth(authOptions)