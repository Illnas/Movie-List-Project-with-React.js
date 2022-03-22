import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const httpLink = new HttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io"
})


const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export { client }