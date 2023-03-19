export const resolvers = {
    Query:{
        hello: ()=>{
            return 'hello world with GraphQL'
        },
        saludo:(root,{name})=>{
            console.log(name);
            return `Hello ${name}`;

        }

    }

};