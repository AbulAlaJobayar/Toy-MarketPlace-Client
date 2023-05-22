import React, { useEffect } from 'react';


const Blogs = () => {
    useEffect(() => {
        document.title = (` Blogs--Funtopia`);
    }, []);
    return (
        <div className='w-5/6 mx-auto '>
            <h1 className='text-5xl font-bold text-center my-10'>Blog page</h1>
            {/* ans one */}
            <div>
                <div>
                    <h1 className='text-3xl font-bold'>Access Tokens</h1>
                    <p>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.

                        In addition, if you have chosen to allow users to log in through an Identity Provider (IdP), such as Facebook, the IdP will issue its own access token to allow your application to call the IDPs API. For example, if your user authenticates using Facebook, the access token issued by Facebook can be used to call the Facebook Graph API. These tokens are controlled by the IdP and can be issued in any format.</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>refresh token</h1>
                    <p>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'> When token is used</h1>
                    <p>It is important to keep in mind that the OAuth 2.0 specification defines access tokens and refresh tokens. So, if we were to discuss authorization strategies in terms of other identity protocols or frameworks, such as SAML, we would not have the concepts of access tokens or refresh tokens.

                        For those involved with web development, access token and refresh tokens are common talk because the web extensively uses token-based authorization and authentication through the OAuth 2.0 framework and the OpenID Connect protocol.

                        When combined, OAuth 2.0 and OIDC bring to life an array of authorization and authentication flows. Each flow has its own set of benefits and caveats that define the best scenarios and architecture where we should use access and refresh tokens.

                        Is the client a traditional web application executing on the server? Use the Authorization Code Flow.

                        Is the client a Single-Page Application (SPA)? Use Authorization Code Flow with Proof Key for Code Exchange (PKCE).

                        Is the client a Single-Page Application (SPA) that does not need an access token? Use the Implicit Flow with Form Post.

                        Is the client the resource owner? You may use the Client Credentials Flow.

                        Is the client absolutely trusted with user credentials? You may use the Resource Owner Password Flow.

                        If there is an app for that, thereis also a flow for that!

                        Keep in mind that according to the spec, when using the Implicit Flow, the authorization server should not issue refresh tokens. The Implicit flow is often implemented in Single-Page Applications (SPAs), which run on the frontend layer of a system architecture. There is no easy way of keeping a refresh token secure in the frontend layer on its own.

                        Using the Authorization Code Flow with Proof Key for Code Exchange (PKCE) mitigates many risks inherent to the Implicit Flow. For example, when using the implicit grant type, the access token is transmitted in the URI fragment, which can expose it to unauthorized parties. You can learn more about these vulnerabilities by reading the Misuse of Access Token to Impersonate Resource Owner in Implicit Flow section of the spec.

                        However, implementing PKCE in your applications still has no impact on how secure refresh tokens are.

                        However, you may not need refresh tokens.

                        There are scenarios where you can still get an access token without interrupting the user and without relying on the almighty power of the refresh token. Other examples to keep a session going can be cookies or silent authentication.

                        However, billions of people use SPAs every day. It is important to provide users with a user experience that balances security and convenience well. Is there anything that we could do to let SPAs afford the convenience of refresh tokens in a less risky and more secure manner?

                        Absolutely!</p>
                    <p className='text-red-500 font bold'>its store on LocalStorage and cookie storage</p>
                </div>
            </div>
            {/* ans---2 */}
            <div>
                <h1 className='text-3xl font-bold'> SQL and NoSQL databases</h1>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            </div>
            {/* ans-3 */}
            <div>
                <div> <h1 className='text-3xl font-bold'>Express js</h1>
                    <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                        Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.</p></div>
                <div>
                    <h1 className='text-3xl font-bold'>Nestjs</h1>
                    <p>
                        Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript
                    </p>
                </div>
            </div>
            {/* ans-4 */}
            <div>
                <h1 className='text-3xl font-bold'> MongoDB aggregate and how does it work</h1>
                <p>MongoDB is aggregation framework provides a way to perform advanced data processing and analysis operations on MongoDB collections. It allows you to process multiple documents within a collection, apply various transformations, and aggregate the results based on your requirements.

                    The aggregation framework in MongoDB is designed to resemble the concept of data pipelines. It consists of a sequence of stages, where each stage performs a specific operation on the input documents and passes the transformed output to the next stage. This allows you to build complex data processing pipelines by combining and chaining multiple stages together.

                    Each stage in the aggregation pipeline performs a specific operation on the data. Some commonly used stages include:

                    $match: Filters and selects documents that match specified criteria, similar to the find operation.

                    $group: Groups documents together based on a specified key and applies various accumulator expressions to compute aggregate values within each group.

                    $project: Reshapes the documents by specifying the fields to include or exclude, renaming fields, creating new computed fields, and so on.

                    $sort: Sorts the documents based on one or more fields.

                    $limit: Limits the number of documents to pass to the next stage.

                    $skip: Skips a specified number of documents and passes the remaining documents to the next stage.

                    $unwind: Deconstructs an array field from the input documents, creating a separate document for each array element.

                    These are just a few examples of the available stages. MongoDB provides many more stages and operators that allow you to perform a wide range of data transformations and computations.

                    To use the aggregation framework, you construct an aggregation pipeline by specifying the stages in the desired order. Each stage takes the input from the previous stage and produces the transformed output, which is passed to the next stage. The pipeline is executed on the server side, and the final result is returned to the client.</p>
            </div>
        </div>
    );
};

export default Blogs;