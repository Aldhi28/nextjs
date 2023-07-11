// our-domaiin.com/news-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

// import Link from "next/link";
// import { Fragment } from "react";

// function NewsPage() {
//   return (
//     <Fragment>
//       <h1>The News Page</h1>
//       <ul>
//         <li>
//           <Link href="/news/nextjs-is-a-great-fraemework">
//             Next Is A Great Fremework
//           </Link>
//         </li>
//         <li>Something Else</li>
//       </ul>
//     </Fragment>
//   );
// }

// export default NewsPage;
