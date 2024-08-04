// interface IUser {
//     firstName: string;
//     lastName: string;
//     age: number;
//     skills: string[];
//     gretting(): void;
// }

// const user1: IUser = {
//     firstName: "steven",
//     lastName: "zuluaga",
//     age: 28,
//     skills: ["ReactJS", "English"],
//     gretting() {
//         console.log("Hello world");
//     }
// }

// interface IPost {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// const getPosts = async () => {
//     const response: Response = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     const data: IPost[] = await response.json() 
// };

// getPosts()