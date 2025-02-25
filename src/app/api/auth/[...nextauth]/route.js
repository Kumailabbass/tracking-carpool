import NextAuth from "next-auth/next";
// import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";


export const authOptions = {
    providers:[
        Credentials({
            name:'credentials',
            credentials:{
                email:{label:'email',type:'string',placeholder:'enter your email'},
                password:{label:'password',type:'password'}
            },
            // async authorize(credentials,req){
            //     console.log("IA MARUNSADNASND",credentials.email , credentials.email )
            //     const user = {id:'1',username:'haider',email:'haider@gmail.com',password:'123'}
            //     if(credentials.email === user.email &&
            //         credentials.password === user.password
            //     ){
            //         return Promise.resolve(user)
            //     }else{
            //         return Promise.resolve(null)
            //     }
            // }
        }),
        // GitHub({
        //     clientId:'Ov23li6D59Y5a80spCGA',
        //     clientSecret:'dfd62ab3e1a659a03b46c8f9efe853882efd2af6'
        // }),
        
    ],
    pages:{
        signIn:'/login'
    },
    callbacks:{
        async session({session,token}){
            session.user = token.user
            return session
        },
        async jwt({token,user}){
            if(user){
                token.user = user
            }
            return token
        } 

       
    }

    
    
}
const handler = NextAuth(authOptions)

// export default NextAuth(authOptions)
export {handler as GET , handler as POST}