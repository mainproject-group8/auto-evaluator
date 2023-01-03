// import AddAnswer from "../components/AddAnswer";
// import Answerkey from "../components/answerkey";
// import RemoveAnswer from "../components/RemoveAnswer";

import AnswerList from "../components/Answer";


export default function Home() {
  return (
  <div className="container mx-auto px-4  h-screen">
    <div className="flex flex-col w-full space-y-2 my-4">
    <h1 className="text-2xl font-bold">51 Letters</h1>
    <h3 >Answers</h3>
    {/* <AddAnswer />
    <Answerkey /> */}
    <AnswerList />
    </div>
  </div>);
}
